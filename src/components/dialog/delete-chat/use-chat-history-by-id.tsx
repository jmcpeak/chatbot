import type { ChatHistoryItem } from "@/app/api/chat/consts";
import { useQuery } from "@tanstack/react-query";

export default function useChatHistoryById(id: string) {
	return useQuery({
		queryKey: ["chatHistoryById"],
		queryFn: async (): Promise<ChatHistoryItem> => {
			const res = await fetch(`/api/chat/history/${id}`);

			return res.json();
		},
		enabled: !!id,
	});
}
