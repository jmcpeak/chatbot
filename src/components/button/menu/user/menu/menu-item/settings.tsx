"use client";

import useStore, { type Store } from "@/hooks/use-store";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import { useCallback } from "react";

type Props = {
	onCloseAction: () => void;
};

const selector = (state: Store) => state.setSettingsDialogOpen;

export default function Settings({ onCloseAction }: Props) {
	const setOpen = useStore(selector);

	const handleClick = useCallback(
		() => async () => {
			setOpen(true);
			onCloseAction();
		},
		[onCloseAction, setOpen],
	);

	return (
		<MenuItem onClick={handleClick}>
			<ListItemIcon>
				<SettingsOutlined fontSize="small" />
			</ListItemIcon>
			Settings
		</MenuItem>
	);
}
