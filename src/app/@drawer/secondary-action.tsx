"use client";

import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import DriveFileRenameOutlineOutlined from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import Inventory2Outlined from "@mui/icons-material/Inventory2Outlined";
import IosShareOutlined from "@mui/icons-material/IosShareOutlined";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import type { MouseEvent } from "react";

type Props = {
	anchorEl: HTMLElement | null;
	onClickAction: (event: MouseEvent<HTMLElement>) => void;
	onCloseAction: () => void;
};

const sx = { color: "warning.main" };

export default function SecondaryAction({
	anchorEl,
	onClickAction,
	onCloseAction,
}: Props) {
	return (
		<>
			<IconButton
				aria-controls="more-menu-appbar"
				aria-haspopup="true"
				aria-label="menu"
				edge="start"
				onClick={onClickAction}
			>
				<MoreHoriz fontSize="small" />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				id="more-menu-appbar"
				onClick={onCloseAction}
				onClose={onCloseAction}
				open={Boolean(anchorEl)}
			>
				<MenuItem onClick={onCloseAction}>
					<ListItemIcon>
						<IosShareOutlined fontSize="small" />
					</ListItemIcon>
					Share
				</MenuItem>
				<MenuItem onClick={onCloseAction}>
					<ListItemIcon>
						<DriveFileRenameOutlineOutlined />
					</ListItemIcon>
					Rename
				</MenuItem>
				<Divider />
				<MenuItem onClick={onCloseAction}>
					<ListItemIcon>
						<Inventory2Outlined fontSize="small" />
					</ListItemIcon>
					Archive
				</MenuItem>
				<MenuItem onClick={onCloseAction} sx={sx}>
					<ListItemIcon>
						<DeleteOutlined color="warning" />
					</ListItemIcon>
					Delete
				</MenuItem>
			</Menu>
		</>
	);
}
