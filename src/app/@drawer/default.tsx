"use client";

import ChatHistoryItems from "@/app/@drawer/chat-history-items";
import ListItemDrawer from "@/app/@drawer/list-item-drawer";
import NewChatListItem from "@/app/@drawer/new-chat-list-item";
import SearchListItem from "@/app/@drawer/search-list-item";
import Toolbar from "@/app/@drawer/toolbar";
import useStore, { type Store } from "@/hooks/use-store";
import PhotoLibraryOutlined from "@mui/icons-material/PhotoLibraryOutlined";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";

const width = 250;
const sxDrawer = {
	width,
	flexShrink: 0,
	"& .MuiDrawer-paper": {
		width,
		boxSizing: "border-box",
	},
};

const selector = (state: Store) => state.drawerOpen;

export default function Default() {
	const open = useStore(selector);

	return (
		<Drawer anchor="left" open={open} sx={sxDrawer} variant="persistent">
			<Toolbar />
			<List>
				<NewChatListItem />
				<SearchListItem />
				<ListItemDrawer
					href="/library"
					icon={<PhotoLibraryOutlined fontSize="small" />}
					text="Library"
				/>
				<ListItem />
				<ListSubheader>Chats</ListSubheader>
				<ChatHistoryItems />
			</List>
		</Drawer>
	);
}
