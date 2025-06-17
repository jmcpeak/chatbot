"use client";

import { sxListItemButton, sxListItemIcon } from "@/components/button/consts";
import KeyboardShortcut from "@/components/button/keyboard-shortcut";
import useIsHovered from "@/hooks/use-is-hovered";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function SearchChats() {
	const { visible, ref, ...props } = useIsHovered();

	return (
		<ListItem disablePadding disableGutters>
			<ListItemButton
				{...props}
				component="a"
				disableGutters
				href="/search"
				sx={sxListItemButton}
			>
				<ListItemIcon sx={sxListItemIcon}>
					<SearchOutlined fontSize="small" />
				</ListItemIcon>
				<ListItemText primary="Search chats" />
				<KeyboardShortcut visible={visible}>⌘ K</KeyboardShortcut>
			</ListItemButton>
		</ListItem>
	);
}
