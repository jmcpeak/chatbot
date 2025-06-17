"use client";

import theme from "@/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as ThemeProviderMui } from "@mui/material/styles";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export default function ThemeRegistry({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider>
			<ThemeProviderMui theme={theme}>
				<CssBaseline enableColorScheme />
				{children}
			</ThemeProviderMui>
		</ThemeProvider>
	);
}
