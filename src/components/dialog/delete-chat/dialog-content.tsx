"use client";

import type { ChatHistoryItem } from "@/app/api/chat/history/consts";
import DialogContentMui from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function DialogContent({ id = "" }) {
	const { data } = useQuery({
		queryKey: ["chatHistoryById"],
		queryFn: async (): Promise<ChatHistoryItem> => {
			const res = await fetch(`/api/chat/history/${id}`);

			return res.json();
		},
		enabled: !!id,
	});

	return (
		<DialogContentMui>
			<Typography>
				This will delete <strong>{data?.label}</strong>.
			</Typography>
			<Typography color="textDisabled" variant="caption">
				Visit <Link href="/">settings</Link> to delete any memories saved during
				this chat.
			</Typography>
		</DialogContentMui>
	);
}
