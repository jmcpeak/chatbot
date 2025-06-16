"use client";

import { sxListItemButton, sxListItemIcon } from "@/components/button/consts";
import KeyboardShortcut from "@/components/button/keyboard-shortcut";
import useIsHovered from "@/hooks/use-is-hovered";
import MapsUgcOutlined from "@mui/icons-material/MapsUgcOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function NewChat() {
	const { visible, ...props } = useIsHovered();

	return (
		<ListItemButton {...props} sx={sxListItemButton} component="a" href="/">
			<ListItemIcon sx={sxListItemIcon}>
				<MapsUgcOutlined fontSize="small" />
			</ListItemIcon>
			<ListItemText primary="New chat" />
			<KeyboardShortcut visible={visible}>⇧ ⌘ O</KeyboardShortcut>
		</ListItemButton>
	);
}
