"use client";

import useStore from "@/hooks/use-store";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";

type Props = {
	onCloseAction: () => void;
};

export default function Settings({ onCloseAction }: Props) {
	const setOpen = useStore((state) => state.setSettingsDialogOpen);

	const handleClick = async () => {
		setOpen(true);
		onCloseAction();
	};

	return (
		<MenuItem onClick={handleClick}>
			<ListItemIcon>
				<SettingsOutlined fontSize="small" />
			</ListItemIcon>
			Settings
		</MenuItem>
	);
}
