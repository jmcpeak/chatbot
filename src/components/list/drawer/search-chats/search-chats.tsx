"use client";

import { sxListItemButton, sxListItemIcon } from "@/components/button/consts";
import KeyboardShortcut from "@/components/button/keyboard-shortcut";
import useIsHovered from "@/hooks/use-is-hovered";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function SearchChats() {
	const { visible, ...props } = useIsHovered();

	return (
		<ListItemButton
			component="a"
			href="/search"
			sx={sxListItemButton}
			{...props}
		>
			<ListItemIcon sx={sxListItemIcon}>
				<SearchOutlined fontSize="small" />
			</ListItemIcon>
			<ListItemText primary="Search chats" />
			<KeyboardShortcut visible={visible}>⌘ K</KeyboardShortcut>
		</ListItemButton>
	);
}
