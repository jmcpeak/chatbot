"use client";

import useMenu from "@/hooks/use-menu";
import AddIcon from "@mui/icons-material/Add";
import CloudSyncOutlined from "@mui/icons-material/CloudSyncOutlined";
import PhotoLibraryOutlined from "@mui/icons-material/PhotoLibraryOutlined";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Add() {
	const [anchorEl, handleClick, handleClose] = useMenu();

	return (
		<>
			<IconButton
				aria-controls="more-menu-appbar"
				aria-haspopup="true"
				aria-label="menu"
				edge="start"
				onClick={handleClick}
			>
				<AddIcon fontSize="small" />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				id="more-menu-appbar"
				onClick={handleClose}
				onClose={handleClose}
				open={Boolean(anchorEl)}
			>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<PhotoLibraryOutlined fontSize="small" />
					</ListItemIcon>
					Add photos and files
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<CloudSyncOutlined />
					</ListItemIcon>
					Add from apps
				</MenuItem>
			</Menu>
		</>
	);
}
