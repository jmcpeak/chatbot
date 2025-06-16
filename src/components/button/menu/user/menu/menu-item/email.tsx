"use client";

import useStore from "@/hooks/use-store";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";

type Props = {
	onCloseAction: () => void;
};

const sx = { color: "text.disabled" };

export default function Email({ onCloseAction }: Props) {
	const setMessage = useStore((state) => state.setSnackbarMessage);
	const setOpen = useStore((state) => state.setSnackbarOpen);
	const email = "jason.mcpeak@cfainstitute.org";

	const handleClick = async () => {
		await navigator.clipboard.writeText(email);
		setMessage("Copied your User ID to clipboard");
		setOpen(true);
		onCloseAction();
	};

	return (
		<MenuItem onClick={handleClick} sx={sx}>
			<ListItemIcon>
				<AccountCircleOutlined color="disabled" fontSize="small" />
			</ListItemIcon>
			{email}
		</MenuItem>
	);
}
