"use client";

import { darkOptions, lightOptions } from "@/theme";
import CssBaseline from "@mui/material/CssBaseline";
import {
	ThemeProvider as ThemeProviderMui,
	createTheme,
} from "@mui/material/styles";
import { useMediaQuery } from "@mui/system";
import { type ReactNode, useMemo } from "react";

export default function ThemeRegistry({ children }: { children: ReactNode }) {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const theme = useMemo(
		() => createTheme(prefersDarkMode ? darkOptions : lightOptions),
		[prefersDarkMode],
	);

	return (
		<ThemeProviderMui theme={theme}>
			<CssBaseline enableColorScheme />
			{children}
		</ThemeProviderMui>
	);
}
