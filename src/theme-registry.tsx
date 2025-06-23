"use client";

import { darkOptions, lightOptions } from "@/theme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/system";
import { type ReactNode, useMemo } from "react";

export default function ThemeRegistry({
	children,
	nonce,
}: { children: ReactNode; nonce: string }) {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const value = useMemo(() => createCache({ key: "mui", nonce }), [nonce]);
	const theme = useMemo(
		() => createTheme(prefersDarkMode ? darkOptions : lightOptions),
		[prefersDarkMode],
	);

	return (
		<ThemeProvider theme={theme}>
			<CacheProvider value={value}>
				<CssBaseline enableColorScheme />
				{children}
			</CacheProvider>
		</ThemeProvider>
	);
}
