"use client";

import ListItemSecondaryActionOnHover from "@/app/@drawer/list-item-secondary-action-on-hover";
import type { ChatHistory } from "@/app/api/chat/history/route";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useQuery } from "@tanstack/react-query";

const sxListItemText = { pl: 2 };

export default function ChatHistoryItems() {
	const { data } = useQuery({
		queryKey: ["chatHistory"],
		queryFn: async (): Promise<ChatHistory> => {
			const res = await fetch("/api/chat/history");

			return res.json();
		},
	});

	return data?.items.map(({ key, label, id }) => (
		<ListItemSecondaryActionOnHover disablePadding disableGutters key={key}>
			<ListItemButton
				component="a"
				href={`/c/${id}`}
				disableGutters
				selected={key === 1}
			>
				<ListItemText inset primary={label} sx={sxListItemText} />
			</ListItemButton>
		</ListItemSecondaryActionOnHover>
	));
}
