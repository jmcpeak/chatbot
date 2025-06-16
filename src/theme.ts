"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "dark",
	},
	typography: {
		fontFamily: "var(--font-geist-sans)",
	},
	components: {
		MuiDialog: {
			styleOverrides: {
				paper: {
					borderRadius: 16,
					backgroundColor: "rgb(27, 27, 27)",
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					"&:hover": {
						backgroundColor: "rgba(255,255,255,0.25)",
					},
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				paper: {
					borderRadius: 8,
					backgroundColor: "rgba(38, 38, 38, 0.85)",
				},
			},
		},
	},
});

export default theme;
