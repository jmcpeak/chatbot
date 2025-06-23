import useStore, { type Store } from "@/hooks/use-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ParamValue } from "next/dist/server/request/params";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/react/shallow";

const selector = (state: Store) => ({
	dialogDeleteChatId: state.dialogDeleteChatId,
	setDialogDeleteChatId: state.setDialogDeleteChatId,
});

export default function useDeleteChatById() {
	const { dialogDeleteChatId, setDialogDeleteChatId } = useStore(
		useShallow(selector),
	);
	const queryClient = useQueryClient();
	const router = useRouter();

	return useMutation({
		mutationKey: ["mutateChatHistoryDeleteById"],
		mutationFn: async (id: ParamValue) => {
			const res = await fetch(`/api/chat/history/${id}`, {
				method: "DELETE",
			});

			if (!res.ok) throw new Error("Failed to delete chat");
			return res.json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["chatHistory"] });

			if (dialogDeleteChatId) {
				setDialogDeleteChatId("");
				return;
			}

			router.push("/");
		},
	});
}
