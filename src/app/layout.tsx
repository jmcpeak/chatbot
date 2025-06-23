import MainWithWidth from "@/app/main-with-width";
import QueryProvider from "@/app/query-provider";
import SuccessSnackbar from "@/components/snackbar/success/snackbar";
import ThemeRegistry from "@/theme-registry";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// biome-ignore lint/nursery/useComponentExportOnlyModules: <explanation>
export const metadata: Metadata = {
	metadataBase: new URL(
		"https://chatbot-git-main-jason-mcpeaks-projects.vercel.app",
	),
	title: "CFA-GPT",
	description: "Latest CFA data and insights powered by AI",
	openGraph: {
		images: [
			{
				url: "/opengraph-image.png",
				width: 1000,
				height: 211,
				alt: "CFA-GPT Logo",
			},
		],
	},
};

type Props = Readonly<{
	appbar: ReactNode;
	children: ReactNode;
	dialog: ReactNode;
	drawer: ReactNode;
}>;

export default function Layout({ appbar, children, dialog, drawer }: Props) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<AppRouterCacheProvider>
					<ThemeRegistry>
						<QueryProvider>
							<SuccessSnackbar />
							{appbar}
							{dialog}
							{drawer}
							<MainWithWidth>{children}</MainWithWidth>
						</QueryProvider>
					</ThemeRegistry>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
