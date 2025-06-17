"use client";

import usePage from "@/app/use-page";
import Box, { type BoxProps } from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function MainWithWidth({ children, ...props }: BoxProps) {
	const { sx } = usePage();

	return (
		<Box {...props} component="main" sx={sx}>
			<Toolbar />
			{children}
		</Box>
	);
}
