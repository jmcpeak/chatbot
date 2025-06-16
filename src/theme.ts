"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "dark",
		background: {
			default: "rgb(33, 33, 33)", // Your desired background color
		},
	},
	typography: {
		fontFamily: "var(--font-geist-sans)",
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: "rgb(33, 33, 33)", // Match the palette or override it
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 24,
					lineHeight: 2,
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				paper: {
					borderRadius: 24,
					backgroundColor: "rgb(27, 27, 27)",
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 24,
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
