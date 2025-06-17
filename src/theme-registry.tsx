"use client";

import theme from "@/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { type ReactNode, useEffect, useState } from "react";

export default function ThemeRegistry({ children }: { children: ReactNode }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null; // Prevents flashing

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme />
			{children}
		</ThemeProvider>
	);
}
