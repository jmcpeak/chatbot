"use client";

import { sxListItem, sxListItemButton } from "@/app/@drawer/consts";
import ListItemSecondaryActionOnHover from "@/app/@drawer/list-item-secondary-action-on-hover";
import useQueryChatHistory from "@/app/@drawer/use-query-chat-history";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { useParams } from "next/navigation";

const sxListItemText = { pl: 2 };

export default function ChatHistoryItems({ secondaryActionDisabled = false }) {
	const { id } = useParams();
	const { data } = useQueryChatHistory();

	return data?.map(({ key, label, ...props }) => (
		<ListItemSecondaryActionOnHover
			disablePadding
			disableGutters
			id={props.id}
			key={key}
			secondaryActionDisabled={secondaryActionDisabled}
			sx={sxListItem}
		>
			<ListItemButton
				component={Link}
				dense
				disableGutters
				href={`/c/${props.id}`}
				selected={id === props.id}
				sx={sxListItemButton}
			>
				<ListItemText inset primary={label} sx={sxListItemText} />
			</ListItemButton>
		</ListItemSecondaryActionOnHover>
	));
}
