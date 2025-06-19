"use client";

import useCopyIcon from "@/components/list/chat-list/chat-list-query/use-copy-icon";
import useOnHoverAndCopyIcon from "@/components/list/chat-list/chat-list-query/use-on-hover-and-copy-icon";
import ChatListResponseActions from "@/components/list/chat-list/chat-list-response/chat-list-response-actions";
import {
	type ChatListItemProps,
	sxChatListItem,
	sxChatListItemBox,
	sxChatListItemText,
} from "@/components/list/chat-list/consts";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useCallback } from "react";

export default function ChatListResponse({
	primary,
	id,
	...props
}: ChatListItemProps) {
	const {
		clearTooltip,
		onCopyMouseLeave,
		onMouseEnter,
		onMouseLeave,
		tooltip,
	} = useOnHoverAndCopyIcon("Copy");
	const [showCopyIcon, onToggleCopyIcon, resetCopyIcon] = useCopyIcon(
		clearTooltip,
		primary,
	);

	const handleMouseLeave = useCallback(() => {
		onMouseLeave();
		if (!showCopyIcon) {
			setTimeout(resetCopyIcon, 100);
		}
	}, [onMouseLeave, resetCopyIcon, showCopyIcon]);

	return (
		<Box sx={sxChatListItemBox}>
			<Grid
				container
				direction="column"
				onMouseEnter={onMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<ListItem {...props} sx={sxChatListItem}>
					<ListItemText primary={primary} sx={sxChatListItemText} />
				</ListItem>
				<ChatListResponseActions
					copyTooltip={tooltip}
					onCopyClick={onToggleCopyIcon}
					onCopyMouseLeave={onCopyMouseLeave}
				/>
			</Grid>
		</Box>
	);
}
