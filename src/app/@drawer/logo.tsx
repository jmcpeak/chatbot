"use client";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { useMediaQuery } from "@mui/system";
import Link from "next/link";
import { useMemo } from "react";

const sxAvatar = { width: 20, height: 20 };

export default function Logo() {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const src = useMemo(
		() => `/cfa-logo-${prefersDarkMode ? "dark" : "light"}.png`,
		[prefersDarkMode],
	);

	return (
		<IconButton component={Link} href="/">
			<Avatar src={src} alt="CFA Institute" sx={sxAvatar} />
		</IconButton>
	);
}
