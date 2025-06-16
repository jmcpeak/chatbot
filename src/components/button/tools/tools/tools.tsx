"use client";

import useMenu from "@/hooks/use-menu";
import AddPhotoAlternateOutlined from "@mui/icons-material/AddPhotoAlternateOutlined";
import DataExplorationOutlined from "@mui/icons-material/DataExplorationOutlined";
import EditNoteOutlined from "@mui/icons-material/EditNoteOutlined";
import EmojiObjectsOutlined from "@mui/icons-material/EmojiObjectsOutlined";
import LanguageOutlined from "@mui/icons-material/LanguageOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Tools() {
	const [anchorEl, handleClick, handleClose] = useMenu();

	return (
		<>
			<Button
				aria-controls="prompt-tools-menu"
				aria-haspopup="true"
				aria-label="prompt menu"
				color="inherit"
				onClick={handleClick}
				startIcon={<TuneOutlinedIcon fontSize="small" />}
				variant="text"
			>
				Tools
			</Button>
			<Menu
				anchorEl={anchorEl}
				id="prompt-tools-menu"
				onClick={handleClose}
				onClose={handleClose}
				open={Boolean(anchorEl)}
			>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<AddPhotoAlternateOutlined fontSize="small" />
					</ListItemIcon>
					Create an image
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<LanguageOutlined fontSize="small" />
					</ListItemIcon>
					Search the web
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<EditNoteOutlined fontSize="small" />
					</ListItemIcon>
					Write or code
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<DataExplorationOutlined fontSize="small" />
					</ListItemIcon>
					Run deep search
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<EmojiObjectsOutlined fontSize="small" />
					</ListItemIcon>
					Think for longer
				</MenuItem>
			</Menu>
		</>
	);
}
