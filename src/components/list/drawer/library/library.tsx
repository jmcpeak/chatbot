"use client";

import { sxListItemButton, sxListItemIcon } from "@/components/button/consts";
import PhotoLibraryOutlined from "@mui/icons-material/PhotoLibraryOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function Library() {
	return (
		<ListItemButton sx={sxListItemButton} component="a" href="/library">
			<ListItemIcon sx={sxListItemIcon}>
				<PhotoLibraryOutlined fontSize="small" />
			</ListItemIcon>
			<ListItemText primary="Library" />
		</ListItemButton>
	);
}
