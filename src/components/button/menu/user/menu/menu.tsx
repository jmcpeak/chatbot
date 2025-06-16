"use client";

import EmailMenuItem from "@/components/button/menu/user/menu/menu-item/email";
import LogoutMenuItem from "@/components/button/menu/user/menu/menu-item/logout";
import PersonalizeMenuItem from "@/components/button/menu/user/menu/menu-item/personalize";
import SettingsMenuItem from "@/components/button/menu/user/menu/menu-item/settings";
import Divider from "@mui/material/Divider";
import MenuMui from "@mui/material/Menu";

type Props = {
	anchorEl: null | HTMLElement;
	onCloseAction: () => void;
};

const sx = { color: "warning.main" };

export default function Menu({ anchorEl, onCloseAction }: Props) {
	return (
		<MenuMui
			anchorEl={anchorEl}
			id="user-menu-appbar"
			onClick={onCloseAction}
			onClose={onCloseAction}
			open={Boolean(anchorEl)}
		>
			<EmailMenuItem onCloseAction={onCloseAction} />
			<PersonalizeMenuItem onCloseAction={onCloseAction} />
			<SettingsMenuItem onCloseAction={onCloseAction} />
			<Divider />
			<LogoutMenuItem onCloseAction={onCloseAction} />
		</MenuMui>
	);
}
