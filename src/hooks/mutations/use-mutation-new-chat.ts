import { temporaryChatName } from "@/hooks/consts";
import useGetViaParams from "@/hooks/use-get-via-params";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ParamValue } from "next/dist/server/request/params";

export default function useMutationNewChat() {
	const temporaryChat = useGetViaParams(temporaryChatName);
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["mutateChatNew"],
		mutationFn: async (label: ParamValue) => {
			const res = await fetch("/api/chat/new", {
				method: "POST",
				body: JSON.stringify({ label, temporaryChat }),
			});

			if (!res.ok) throw new Error("Failed to create chat");

			return res.json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["chatHistory"] });
		},
	});
}
