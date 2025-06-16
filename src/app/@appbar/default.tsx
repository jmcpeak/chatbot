"use client";

import MoreButton from "@/components/button/menu/more/more";
import User from "@/components/button/menu/user/user";
import NewChatButton from "@/components/button/new-chat/new-chat-icon";
import OpenSidebarButton from "@/components/button/sidebar/open-sidebar";
import useStore from "@/hooks/use-store";
import MuiAppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function AppBar() {
	const open = useStore((state) => state.drawerOpen);

	return (
		<MuiAppBar elevation={0}>
			<Toolbar>
				<Grid
					alignItems="center"
					container
					sx={{ width: "100%", pl: open ? 28 : undefined }}
					spacing={1}
				>
					<Grid>
						<OpenSidebarButton />
					</Grid>
					<Grid>
						<NewChatButton />
					</Grid>
					<Grid size="grow">
						<Typography variant="h6" noWrap component="div">
							CFA-GPT
						</Typography>
					</Grid>
					<Grid>
						<MoreButton />
					</Grid>
					<Grid>
						<User />
					</Grid>
				</Grid>
			</Toolbar>
		</MuiAppBar>
	);
}
