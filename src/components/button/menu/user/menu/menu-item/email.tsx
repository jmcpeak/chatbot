"use client";

import useCopyTextToClipboard from "@/hooks/use-copy-text-to-clipboard";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import { useCallback } from "react";

type Props = {
	onCloseAction: () => void;
};

const email = "jason.mcpeak@cfainstitute.org";
const message = "Copied your User ID to clipboard";
const sx = { color: "text.disabled" };

export default function Email({ onCloseAction }: Props) {
	const onCopyText = useCopyTextToClipboard(email, message);

	const handleClick = useCallback(() => {
		onCopyText();
		onCloseAction();
	}, [onCopyText, onCloseAction]);

	return (
		<MenuItem onClick={handleClick} sx={sx}>
			<ListItemIcon>
				<AccountCircleOutlined color="disabled" fontSize="small" />
			</ListItemIcon>
			{email}
		</MenuItem>
	);
}
