"use client";

import ChatHistoryItems from "@/app/@drawer/chat-history-items";
import ListItemDrawer from "@/app/@drawer/list-item-drawer";
import NewChatListItem from "@/app/@drawer/new-chat-list-item";
import Toolbar from "@/app/@drawer/toolbar";
import useStore from "@/hooks/use-store";
import PhotoLibraryOutlined from "@mui/icons-material/PhotoLibraryOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";

const width = 250;
const shortcutSearch = { mac: "⌘ K", windows: "Ctrl K" };
const sxDrawer = {
	width,
	flexShrink: 0,
	"& .MuiDrawer-paper": {
		width,
		boxSizing: "border-box",
	},
};

export default function Default() {
	const open = useStore((state) => state.drawerOpen);

	return (
		<Drawer anchor="left" open={open} sx={sxDrawer} variant="persistent">
			<Toolbar />
			<List>
				<NewChatListItem />
				<ListItemDrawer
					href="/search"
					icon={<SearchOutlined fontSize="small" />}
					shortcut={shortcutSearch}
					text="Search chats"
				/>
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
