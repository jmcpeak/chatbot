import QuestionAnswerOutlined from "@mui/icons-material/QuestionAnswerOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function ListItemNewChat() {
	return (
		<ListItemButton sx={{ pb: 0, pt: 0 }} component="a" href="/search">
			<ListItemIcon sx={{ minWidth: 32 }}>
				<QuestionAnswerOutlined fontSize="small" />
			</ListItemIcon>
			<ListItemText primary="New chat" />
		</ListItemButton>
	);
}
