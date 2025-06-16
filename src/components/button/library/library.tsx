import PhotoLibraryOutlined from "@mui/icons-material/PhotoLibraryOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function Library() {
	return (
		<ListItemButton sx={{ pb: 0, pt: 0 }} component="a" href="/library">
			<ListItemIcon sx={{ minWidth: 32 }}>
				<PhotoLibraryOutlined fontSize="small" />
			</ListItemIcon>
			<ListItemText primary="Library" />
		</ListItemButton>
	);
}
