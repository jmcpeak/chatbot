"use client";

import ButtonCopyWithConfirm from "@/components/list/chat-list/button-copy-with-confirm/button-copy-with-confirm";
import EditOutlined from "@mui/icons-material/EditOutlined";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function ChatListQueryActions({
	copyTooltip = "Copy",
	hovering = false,
	onCopyClick = () => {},
	onCopyMouseLeave = () => {},
	onEditClick = () => {},
	showCopyIcon = true,
	visible = true,
}) {
	return visible ? (
		<Fade in={hovering} timeout={200}>
			<Grid container>
				<Grid>
					<ButtonCopyWithConfirm
						onClick={onCopyClick}
						onMouseLeave={onCopyMouseLeave}
						showCopyIcon={showCopyIcon}
						title={copyTooltip}
					/>
				</Grid>
				<Grid>
					<Tooltip enterDelay={250} title="Edit message">
						<IconButton onClick={onEditClick}>
							<EditOutlined fontSize="small" />
						</IconButton>
					</Tooltip>
				</Grid>
			</Grid>
		</Fade>
	) : null;
}
