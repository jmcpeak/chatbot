import useStore, { type Store } from "@/hooks/use-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ParamValue } from "next/dist/server/request/params";
import { useParams, useRouter } from "next/navigation";
import { useShallow } from "zustand/react/shallow";

const selector = (state: Store) => ({
	dialogDeleteChatId: state.dialogDeleteChatId,
	setDialogDeleteChatId: state.setDialogDeleteChatId,
});

export default function useMutationArchiveOrDeleteChatById(permanent = false) {
	const { dialogDeleteChatId, setDialogDeleteChatId } = useStore(
		useShallow(selector),
	);
	const params = useParams();
	const queryClient = useQueryClient();
	const router = useRouter();

	return useMutation({
		mutationKey: ["mutateChatHistoryDeleteById"],
		mutationFn: async (id: ParamValue) => {
			const res = await fetch(
				`/api/chat/history/${id}${permanent ? "?permanent" : ""}`,
				{
					method: "DELETE",
				},
			);

			if (!res.ok) throw new Error("Failed to delete chat");
			return res.json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["chatHistory"] });

			if (dialogDeleteChatId) {
				setDialogDeleteChatId("");

				if (params.id) {
					router.push("/");
				}

				return;
			}

			router.push("/");
		},
	});
}
