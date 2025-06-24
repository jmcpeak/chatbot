import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ParamValue } from "next/dist/server/request/params";

export default function useMutationNewChat() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["mutateChatNew"],
		mutationFn: async (label: ParamValue) => {
			const res = await fetch("/api/chat/new", {
				method: "POST",
				body: JSON.stringify({ label }),
			});

			if (!res.ok) throw new Error("Failed to create chat");

			return res.json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["chatHistory"] });
		},
	});
}
