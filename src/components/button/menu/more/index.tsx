import useMenu from "@/hooks/use-menu";
import useStore, { type Store } from "@/hooks/use-store";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import Inventory2Outlined from "@mui/icons-material/Inventory2Outlined";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useCallback } from "react";

const selector = (state: Store) => state.setDialogDeleteChatOpen;
const sx = { color: "warning.main" };

export default function More() {
	const [anchorEl, handleClick, handleClose] = useMenu();
	const setDialogDeleteChatOpen = useStore(selector);

	const handleClickDelete = useCallback(() => {
		handleClose();
		setDialogDeleteChatOpen(true);
	}, [handleClose, setDialogDeleteChatOpen]);

	return (
		<>
			<IconButton
				aria-controls="more-menu-appbar"
				aria-haspopup="true"
				aria-label="menu"
				edge="start"
				onClick={handleClick}
			>
				<MoreHoriz fontSize="small" />
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
						<Inventory2Outlined fontSize="small" />
					</ListItemIcon>
					Archive
				</MenuItem>
				<MenuItem onClick={handleClickDelete} sx={sx}>
					<ListItemIcon>
						<DeleteOutlined color="warning" />
					</ListItemIcon>
					Delete
				</MenuItem>
			</Menu>
		</>
	);
}
