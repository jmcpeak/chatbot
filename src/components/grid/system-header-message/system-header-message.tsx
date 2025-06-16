"use client";

import type { HeaderMessages } from "@/app/api/header/message/route";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";

export default function SystemHeaderMessage() {
	const { data } = useQuery({
		queryKey: ["headerMessage"],
		queryFn: async (): Promise<HeaderMessages> => {
			const res = await fetch("/api/header/message");

			return res.json();
		},
		staleTime: 600000, // 10 minutes in milliseconds
	});

	return (
		<Grid display="flex" justifyContent="center">
			<Typography variant="h5">{data?.message}</Typography>
		</Grid>
	);
}
