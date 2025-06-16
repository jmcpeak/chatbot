"use client";

import Menu from "@/components/button/menu/user/menu/menu";
import DialogPersonalize from "@/components/dialog/personalize/personalize";
import DialogSettings from "@/components/dialog/settings/settings";
import useMenu from "@/hooks/use-menu";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

const sxAvatar = { width: 32, height: 32 };
const sxIconButton = { width: 40, height: 40 };

export default function User() {
	const [anchorEl, handleClick, handleClose] = useMenu();

	return (
		<>
			<IconButton
				aria-controls="user-menu-appbar"
				aria-haspopup="true"
				aria-label="menu"
				onClick={handleClick}
				sx={sxIconButton}
			>
				<Avatar alt="Jason McPeak" src="/jason.png" sx={sxAvatar} />
			</IconButton>
			<Menu anchorEl={anchorEl} onCloseAction={handleClose} />
			<DialogPersonalize />
			<DialogSettings />
		</>
	);
}
