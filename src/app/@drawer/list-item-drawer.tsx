"use client";

import {
	sxListItem,
	sxListItemButton,
	sxListItemIcon,
} from "@/app/@drawer/consts";
import KeyboardShortcut, {
	type ShortcutProps,
} from "@/components/button/keyboard-shortcut";
import useIsHovering from "@/hooks/use-is-hovering";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEventHandler, ReactNode } from "react";

type Props = {
	href: string;
	icon: ReactNode;
	onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
	shortcut?: ShortcutProps;
	text: string;
};

export default function ListItemDrawer({
	href,
	icon,
	onClick,
	shortcut,
	text,
}: Props) {
	const pathname = usePathname();
	const { hovering, onMouseEnter, onMouseLeave } = useIsHovering();

	return (
		<ListItem disablePadding disableGutters sx={sxListItem}>
			<ListItemButton
				component={Link}
				dense
				href={href}
				onClick={onClick}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				selected={pathname === href}
				sx={sxListItemButton}
			>
				<ListItemIcon sx={sxListItemIcon}>{icon}</ListItemIcon>
				<ListItemText primary={text} />
				<KeyboardShortcut shortcut={shortcut} visible={hovering} />
			</ListItemButton>
		</ListItem>
	);
}
