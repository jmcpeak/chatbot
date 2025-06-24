"use client";

import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { type ReactNode, useEffect, useRef, useState } from "react";

export default function QueryProvider({ children }: { children: ReactNode }) {
	const [hydrated, setHydrated] = useState(false);
	const queryClientRef = useRef<QueryClient>(new QueryClient());

	useEffect(() => {
		const [unsubscribe, promise] = persistQueryClient({
			queryClient: queryClientRef.current,
			persister: createSyncStoragePersister({ storage: window.localStorage }),
			maxAge: 1000 * 60 * 60 * 24, // 24 hours
			buster: "v2",
		});

		promise.then(() => setHydrated(true));

		return unsubscribe; // unsubscribe on unmount
	}, []);

	if (!hydrated) return null;

	return (
		<QueryClientProvider client={queryClientRef.current}>
			{children}
		</QueryClientProvider>
	);
}
