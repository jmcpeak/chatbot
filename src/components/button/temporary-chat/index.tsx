"use client";

import useToggleViaParamsEffect from "@/hooks/use-toggle-via-params-effect";
import ShieldOutlined from "@mui/icons-material/ShieldOutlined";
import VerifiedUserOutlined from "@mui/icons-material/VerifiedUserOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function TemporaryChat() {
	const [temporaryChat, handleClick] =
		useToggleViaParamsEffect("temporary-chat");

	return (
		<Tooltip title={`Turn ${temporaryChat ? "on" : "off"} temporary chat`}>
			<IconButton aria-label="temporary chat" onClick={handleClick}>
				{temporaryChat ? (
					<ShieldOutlined fontSize="small" />
				) : (
					<VerifiedUserOutlined fontSize="small" />
				)}
			</IconButton>
		</Tooltip>
	);
}
