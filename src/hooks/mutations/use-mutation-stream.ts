import type { StoreActions } from "@/hooks/use-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ParamValue } from "next/dist/server/request/params";

export default function useMutationStream(
	setStreamedResponse: StoreActions["setStreamedResponse"],
) {
	return useMutation({
		mutationKey: ["mutateStream"],
		mutationFn: async (prompt: string) => {
			const res = await fetch("/api/stream", {
				method: "POST",
				body: JSON.stringify({ prompt }),
			});

			if (!res.body) return "No response body received.";

			const reader = res.body.getReader();
			const decoder = new TextDecoder("utf-8");

			while (true) {
				const { value, done } = await reader.read();
				if (done) break;
				const chunk = decoder.decode(value);

				setStreamedResponse((prev) => [prev + chunk]);
			}
		},
	});
}
