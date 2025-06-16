import KeyboardVoiceOutlined from "@mui/icons-material/KeyboardVoiceOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function Dictate() {
	return (
		<Tooltip title="Dictate">
			<IconButton
				aria-controls="more-menu-appbar"
				aria-haspopup="true"
				aria-label="menu"
				edge="start"
				onClick={() => {}}
			>
				<KeyboardVoiceOutlined fontSize="small" />
			</IconButton>
		</Tooltip>
	);
}
