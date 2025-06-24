import type { ChatHistoryItem } from "@/app/api/chat/consts";
import { useQuery } from "@tanstack/react-query";

export default function useQueryChatHistory() {
	return useQuery({
		queryKey: ["chatHistory"],
		queryFn: async (): Promise<ChatHistoryItem[]> => {
			const res = await fetch("/api/chat/history");

			return res.json();
		},
	});
}
