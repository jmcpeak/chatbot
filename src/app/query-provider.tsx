"use client";

import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

type ProviderProps = { children: ReactNode };

export default function QueryProvider({ children }: ProviderProps) {
	const [isClient, setIsClient] = useState(false);
	const client = useMemo(() => new QueryClient(), []);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
