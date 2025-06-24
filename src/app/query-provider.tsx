"use client";

import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import {
	type PersistQueryClientOptions,
	PersistQueryClientProvider,
} from "@tanstack/react-query-persist-client";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

type PersistorOptions = Omit<PersistQueryClientOptions, "queryClient"> | null;

const maxAge = 1000 * 60 * 60 * 24; // 24 hours
const optionsPersist = {
	buster: "v2",
	maxAge,
};
const optionsClient = {
	defaultOptions: {
		queries: {
			gcTime: maxAge,
		},
	},
};

export default function QueryProvider({ children }: { children: ReactNode }) {
	const [persistOptions, setPersistOptions] = useState<PersistorOptions>(null);
	const client = useMemo(() => new QueryClient(optionsClient), []);

	useEffect(() => {
		// window will be available here
		setPersistOptions({
			...optionsPersist,
			persister: createSyncStoragePersister({
				storage: window.localStorage,
			}),
		});
	}, []);

	if (!persistOptions) return null;

	return (
		<PersistQueryClientProvider client={client} persistOptions={persistOptions}>
			{children}
		</PersistQueryClientProvider>
	);
}
