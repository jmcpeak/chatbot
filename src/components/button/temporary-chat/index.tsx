"use client";

import { temporaryChatName } from "@/hooks/consts";
import useToggleViaParams from "@/hooks/use-toggle-via-params";
import ShieldOutlined from "@mui/icons-material/ShieldOutlined";
import VerifiedUserOutlined from "@mui/icons-material/VerifiedUserOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function TemporaryChat() {
	const [temporaryChat, handleClick] = useToggleViaParams(temporaryChatName);

	return (
		<Tooltip title={`Turn ${temporaryChat ? "off" : "on"} temporary chat`}>
			<IconButton aria-label="temporary chat" onClick={handleClick}>
				{temporaryChat ? (
					<VerifiedUserOutlined fontSize="small" />
				) : (
					<ShieldOutlined fontSize="small" />
				)}
			</IconButton>
		</Tooltip>
	);
}
