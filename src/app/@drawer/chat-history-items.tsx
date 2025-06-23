"use client";

import { sxListItem, sxListItemButton } from "@/app/@drawer/consts";
import ListItemSecondaryActionOnHover from "@/app/@drawer/list-item-secondary-action-on-hover";
import type { ChatHistory } from "@/app/api/chat/history/consts";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";

const sxListItemText = { pl: 2 };

export default function ChatHistoryItems({ secondaryActionDisabled = false }) {
	const { id: idParam } = useParams();
	const { data } = useQuery({
		queryKey: ["chatHistory"],
		queryFn: async (): Promise<ChatHistory> => {
			const res = await fetch("/api/chat/history");

			return res.json();
		},
	});

	return data?.items.map(({ key, label, id }) => (
		<ListItemSecondaryActionOnHover
			disablePadding
			disableGutters
			id={id}
			key={key}
			secondaryActionDisabled={secondaryActionDisabled}
			sx={sxListItem}
		>
			<ListItemButton
				component={Link}
				dense
				disableGutters
				href={`/c/${id}`}
				selected={id === idParam}
				sx={sxListItemButton}
			>
				<ListItemText inset primary={label} sx={sxListItemText} />
			</ListItemButton>
		</ListItemSecondaryActionOnHover>
	));
}
