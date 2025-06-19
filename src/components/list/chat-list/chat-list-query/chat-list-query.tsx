"use client";

import ChatListQueryActions from "@/components/list/chat-list/chat-list-query/chat-list-query-actions";
import Prompt from "@/components/list/chat-list/chat-list-query/prompt";
import useCopyIcon from "@/components/list/chat-list/chat-list-query/use-copy-icon";
import useOnHoverAndCopyIcon from "@/components/list/chat-list/chat-list-query/use-on-hover-and-copy-icon";
import {
	type ChatListItemProps,
	sxChatListItem,
	sxChatListItemBox,
	sxChatListItemText,
} from "@/components/list/chat-list/consts";
import useToggleVisibility from "@/hooks/use-toggle-visibility";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useCallback } from "react";

const sxListItem = {
	...sxChatListItem,
	backgroundColor: "action.disabledBackground",
};

export default function ChatListQuery({
	primary,
	id,
	...props
}: ChatListItemProps) {
	const {
		clearTooltip,
		hovering,
		onCopyMouseLeave,
		onMouseEnter,
		onMouseLeave,
		tooltip,
	} = useOnHoverAndCopyIcon("Copy");
	const [showCopyIcon, onToggleCopyIcon, resetCopyIcon] = useCopyIcon(
		clearTooltip,
		primary,
	);
	const [textOrPrompt, onEditClick] = useToggleVisibility();

	const handleCancelAction = useCallback(() => {
		onEditClick();
		onMouseLeave();
	}, [onEditClick, onMouseLeave]);
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
				<ListItem {...props} sx={sxListItem}>
					{textOrPrompt ? (
						<ListItemText primary={primary} sx={sxChatListItemText} />
					) : (
						<Collapse appear in orientation="horizontal">
							<Prompt onCancelAction={handleCancelAction} value={primary} />
						</Collapse>
					)}
				</ListItem>
				<ChatListQueryActions
					copyTooltip={tooltip}
					hovering={hovering}
					onCopyClick={onToggleCopyIcon}
					onCopyMouseLeave={onCopyMouseLeave}
					onEditClick={onEditClick}
					showCopyIcon={showCopyIcon}
					visible={textOrPrompt}
				/>
			</Grid>
		</Box>
	);
}
