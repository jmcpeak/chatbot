"use client";

import useStore from "@/hooks/use-store";
import QuestionAnswerOutlined from "@mui/icons-material/QuestionAnswerOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function NewChatIcon() {
	const open = useStore((state) => state.drawerOpen);

	return !open ? (
		<Tooltip title="New chat">
			<IconButton aria-label="new chat">
				<QuestionAnswerOutlined fontSize="small" />
			</IconButton>
		</Tooltip>
	) : null;
}
