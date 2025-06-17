"use client";

import { sxListItemButton, sxListItemIcon } from "@/components/button/consts";
import PhotoLibraryOutlined from "@mui/icons-material/PhotoLibraryOutlined";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function Library() {
	return (
		<ListItem disablePadding disableGutters>
			<ListItemButton
				component="a"
				disableGutters
				href="/library"
				sx={sxListItemButton}
			>
				<ListItemIcon sx={sxListItemIcon}>
					<PhotoLibraryOutlined fontSize="small" />
				</ListItemIcon>
				<ListItemText primary="Library" />
			</ListItemButton>
		</ListItem>
	);
}
