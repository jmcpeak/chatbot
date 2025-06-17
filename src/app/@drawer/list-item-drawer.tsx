"use client";

import {
	sxListItem,
	sxListItemButton,
	sxListItemIcon,
} from "@/app/@drawer/consts";
import KeyboardShortcut, {
	type ShortcutProps,
} from "@/components/button/keyboard-shortcut";
import useIsHovered from "@/hooks/use-is-hovered";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type Props = {
	href: string;
	icon: ReactNode;
	shortcut?: ShortcutProps;
	text: string;
};

export default function ListItemDrawer({ href, icon, shortcut, text }: Props) {
	const pathname = usePathname();
	const { visible, ref, ...propsHover } = useIsHovered();

	return (
		<ListItem disablePadding disableGutters sx={sxListItem}>
			<ListItemButton
				{...propsHover}
				component={Link}
				dense
				href={href}
				selected={pathname === href}
				sx={sxListItemButton}
			>
				<ListItemIcon sx={sxListItemIcon}>{icon}</ListItemIcon>
				<ListItemText primary={text} />
				<KeyboardShortcut shortcut={shortcut} visible={visible} />
			</ListItemButton>
		</ListItem>
	);
}
