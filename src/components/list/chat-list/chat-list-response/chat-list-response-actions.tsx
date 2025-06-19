"use client";

import ButtonCopyWithConfirm from "@/components/list/chat-list/button-copy-with-confirm/button-copy-with-confirm";
import ThumbDownOutlined from "@mui/icons-material/ThumbDownOutlined";
import ThumbUpOutlined from "@mui/icons-material/ThumbUpOutlined";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function ChatListResponseActions({
	copyOrCheck = true,
	copyTooltip = "Copy",
	onCopyClick = () => {},
	onCopyMouseLeave = () => {},
}) {
	return (
		<Grid container>
			<Grid>
				<ButtonCopyWithConfirm
					showCopyIcon={copyOrCheck}
					onClick={onCopyClick}
					onMouseLeave={onCopyMouseLeave}
					title={copyTooltip}
				/>
			</Grid>
			<Grid>
				<Tooltip enterDelay={250} title="Good response">
					<IconButton>
						<ThumbUpOutlined fontSize="small" />
					</IconButton>
				</Tooltip>
			</Grid>
			<Grid>
				<Tooltip enterDelay={250} title="Bad response">
					<IconButton>
						<ThumbDownOutlined fontSize="small" />
					</IconButton>
				</Tooltip>
			</Grid>
		</Grid>
	);
}
