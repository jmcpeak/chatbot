"use client";

import CheckOutlined from "@mui/icons-material/CheckOutlined";
import ContentCopyOutlined from "@mui/icons-material/ContentCopyOutlined";
import EditOutlined from "@mui/icons-material/EditOutlined";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function ButtonCopyWithConfirm({
	showCopyIcon = true,
	onClick = () => {},
	onMouseLeave = () => {},
	title = "",
}) {
	return (
		<Tooltip enterDelay={250} title={title}>
			<IconButton onClick={onClick} onMouseLeave={onMouseLeave}>
				{showCopyIcon ? (
					<ContentCopyOutlined fontSize="small" />
				) : (
					<CheckOutlined fontSize="small" />
				)}
			</IconButton>
		</Tooltip>
	);
}
