import SearchOutlined from "@mui/icons-material/SearchOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function SearchChats() {
	return (
		<ListItemButton sx={{ pb: 0, pt: 0 }} component="a" href="/search">
			<ListItemIcon sx={{ minWidth: 32 }}>
				<SearchOutlined fontSize="small" />
			</ListItemIcon>
			<ListItemText primary="Search chats" />
		</ListItemButton>
	);
}
