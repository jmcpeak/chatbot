"use client";

import ChatHistoryItems from "@/app/@drawer/chat-history-items";
import NewChatListItem from "@/app/@drawer/new-chat-list-item";
import ListMui from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";

const sx = {
	backgroundColor: "transparent",
	color: "text.disabled",
	lineHeight: "unset",
	pb: 1,
	pt: 2,
};

export default function List() {
	return (
		<ListMui>
			<NewChatListItem />
			<ListSubheader sx={sx}>Yesterday</ListSubheader>
			<ChatHistoryItems secondaryActionDisabled />
		</ListMui>
	);
}
