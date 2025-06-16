"use client";

import LogoutOutlined from "@mui/icons-material/LogoutOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";

type Props = {
	onCloseAction: () => void;
};

export default function Logout({ onCloseAction }: Props) {
	return (
		<MenuItem onClick={onCloseAction}>
			<ListItemIcon>
				<LogoutOutlined />
			</ListItemIcon>
			Log out
		</MenuItem>
	);
}
