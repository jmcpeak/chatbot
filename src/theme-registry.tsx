"use client";

import theme from "@/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { type ReactNode, useLayoutEffect, useState } from "react";

export default function ThemeRegistry({ children }: { children: ReactNode }) {
	const [mounted, setMounted] = useState(false);

	useLayoutEffect(() => {
		setMounted(true);
	}, []);

	return mounted ? (
		<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme />
			{children}
		</ThemeProvider>
	) : null;
}
