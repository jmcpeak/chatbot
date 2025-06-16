"use client";

import ListItemLibrary from "@/components/button/library/library";
import ListItemNewChat from "@/components/button/new-chat/list-item-new-chat";
import ListItemSearchChats from "@/components/button/search-chats/search-chats";
import CloseSidebarButton from "@/components/button/sidebar/close-sidebar";
import useStore from "@/hooks/use-store";
import { Avatar, IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Toolbar from "@mui/material/Toolbar";

const width = 250;
const sxDrawer = {
	width,
	flexShrink: 0,
	"& .MuiDrawer-paper": {
		width,
		boxSizing: "border-box",
	},
};
const items = [
	{ key: 1, label: "Understanding Tariffs" },
	{ key: 2, label: "Smoot-Hawley Act" },
	{ key: 3, label: "The Great Depression" },
];

export default function Default() {
	const open = useStore((state) => state.drawerOpen);

	return (
		<Drawer anchor="left" open={open} sx={sxDrawer} variant="persistent">
			<Toolbar sx={{ "&.MuiToolbar-root": { pl: 2, pr: 2 } }}>
				<Grid container alignItems="center" sx={{ width: "100%" }}>
					<Grid size="grow">
						<IconButton component="a" href="/example">
							<Avatar
								src="/cfa-bw-crop.png"
								alt="CFA Institute"
								sx={{ width: 20, height: 20 }}
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
				{items.map(({ key, label }) => (
					<ListItemText inset key={key} primary={label} sx={{ pl: 2 }} />
				))}
			</List>
		</Drawer>
	);
}
