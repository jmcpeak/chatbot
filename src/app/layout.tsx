import MainWithWidth from "@/app/main-with-width";
import QueryProvider from "@/app/query-provider";
import SuccessSnackbar from "@/components/snackbar/success/snackbar";
import ThemeRegistry from "@/theme-registry";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
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
	openGraph: {
		images: "/opengraph-image.png",
	},
	twitter: {
		images: "/opengraph-image.png",
	},
	title: "CFA-GPT",
	description: "Latest CFA data and insights powered by AI",
};

type Props = Readonly<{
	appbar: ReactNode;
	children: ReactNode;
	dialog: ReactNode;
	drawer: ReactNode;
}>;

export default async function Layout({
	appbar,
	children,
	dialog,
	drawer,
}: Props) {
	const headersList = await headers();
	const nonce = headersList.get("x-csp-nonce") ?? "";

	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<AppRouterCacheProvider>
					<ThemeRegistry nonce={nonce}>
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
