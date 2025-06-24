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
	href?: string;
	icon: ReactNode;
	onClick?:
		| MouseEventHandler<HTMLAnchorElement>
		| MouseEventHandler<HTMLButtonElement>;
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
			{href ? (
				<ListItemButton
					component={Link}
					href={href}
					dense
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
					selected={pathname !== "/" && pathname === href}
					sx={sxListItemButton}
				>
					<ListItemIcon sx={sxListItemIcon}>{icon}</ListItemIcon>
					<ListItemText primary={text} />
					<KeyboardShortcut shortcut={shortcut} visible={hovering} />
				</ListItemButton>
			) : (
				<ListItemButton
					component="button"
					dense
					onClick={onClick as MouseEventHandler<HTMLButtonElement> | undefined}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
					selected={false}
					sx={sxListItemButton}
				>
					<ListItemIcon sx={sxListItemIcon}>{icon}</ListItemIcon>
					<ListItemText primary={text} />
					<KeyboardShortcut shortcut={shortcut} visible={hovering} />
				</ListItemButton>
			)}
		</ListItem>
	);
}
