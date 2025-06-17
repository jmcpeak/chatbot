"use client";

import ChatHistoryItems from "@/app/@drawer/chat-history-items";
import CloseSidebarButton from "@/components/button/sidebar/close-sidebar";
import ListItemLibrary from "@/components/list/drawer/library/library";
import ListItemNewChat from "@/components/list/drawer/new-chat/new-chat";
import ListItemSearchChats from "@/components/list/drawer/search-chats/search-chats";
import useStore from "@/hooks/use-store";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Toolbar from "@mui/material/Toolbar";

const width = 250;
const sxAvatar = { width: 20, height: 20 };
const sxDrawer = {
	width,
	flexShrink: 0,
	"& .MuiDrawer-paper": {
		width,
		boxSizing: "border-box",
	},
};
const sxGrid = { width: "100%" };
const sxToolbar = { "&.MuiToolbar-root": { pl: 2, pr: 2 } };

export default function Default() {
	const open = useStore((state) => state.drawerOpen);

	return (
		<Drawer anchor="left" open={open} sx={sxDrawer} variant="persistent">
			<Toolbar sx={sxToolbar}>
				<Grid container alignItems="center" sx={sxGrid}>
					<Grid size="grow">
						<IconButton component="a" href="/example">
							<Avatar
								src="/cfa-bw-crop.png"
								alt="CFA Institute"
								sx={sxAvatar}
							/>
						</IconButton>
					</Grid>
					<Grid>
						<CloseSidebarButton />
					</Grid>
				</Grid>
			</Toolbar>
			<List>
				<ListItemNewChat />
				<ListItemSearchChats />
				<ListItemLibrary />
				<ListItem />
				<ListSubheader>Chats</ListSubheader>
				<ChatHistoryItems />
			</List>
		</Drawer>
	);
}
