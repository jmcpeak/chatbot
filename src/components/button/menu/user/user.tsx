"use client";

import type { Profile } from "@/app/api/profile/route";
import Menu from "@/components/button/menu/user/menu/menu";
import DialogPersonalize from "@/components/dialog/personalize/personalize";
import DialogSettings from "@/components/dialog/settings/settings";
import useMenu from "@/hooks/use-menu";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { useQuery } from "@tanstack/react-query";

const sxAvatar = { width: 32, height: 32 };
const sxIconButton = { width: 40, height: 40 };

export default function User() {
	const [anchorEl, handleClick, handleClose] = useMenu();
	const { data } = useQuery({
		queryKey: ["profile"],
		queryFn: async (): Promise<Profile> => {
			const res = await fetch("/api/profile");

			return res.json();
		},
		staleTime: 10000, // 10 seconds
	});

	return (
		<>
			<IconButton
				aria-controls="user-menu-appbar"
				aria-haspopup="true"
				aria-label="menu"
				onClick={handleClick}
				sx={sxIconButton}
			>
				<Avatar
					alt={`${data?.firstName} ${data?.lastName}`}
					src={data?.avatar}
					sx={sxAvatar}
				/>
			</IconButton>
			<Menu anchorEl={anchorEl} onCloseAction={handleClose} />
			<DialogPersonalize />
			<DialogSettings />
		</>
	);
}
