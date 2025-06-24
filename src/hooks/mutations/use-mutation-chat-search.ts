import { useMutation } from "@tanstack/react-query";
import type { ParamValue } from "next/dist/server/request/params";

export default function useMutationChatSearch() {
	return useMutation({
		mutationKey: ["chatSearch"],
		mutationFn: async (query: ParamValue) => {
			const res = await fetch(`/api/chat/search?query=${query}`, {
				method: "GET",
			});

			return res.json();
		},
	});
}
