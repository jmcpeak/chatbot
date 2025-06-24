"use client";

import type { HeaderMessages } from "@/app/api/header/message/route";
import useToggleViaParams from "@/hooks/use-toggle-via-params";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";

const sx = { maxWidth: 250, textAlign: "center" };
const temporaryChatMessage =
	"This chat won't appear in history, use or update ChatGPT's memory, or be used to train our models. For safety purposes, we may keep a copy of this chat for up to 30 days.";

export default function SystemHeaderMessage() {
	const [temporaryChat] = useToggleViaParams("temporary-chat");

	const { data } = useQuery({
		queryKey: ["headerMessage"],
		queryFn: async (): Promise<HeaderMessages> => {
			const res = await fetch("/api/header/message");

			return res.json();
		},
		staleTime: 600000, // 10 minutes in milliseconds
	});

	return (
		<Grid container direction="column" alignItems="center">
			<Collapse in={temporaryChat}>
				<Grid container direction="column" alignItems="center">
					<Typography variant="h5">Temporary Chat</Typography>
					<Typography sx={sx} variant="body2">
						{temporaryChatMessage}
					</Typography>
				</Grid>
			</Collapse>
			<Collapse in={!temporaryChat}>
				<Typography variant="h5">{data?.message}</Typography>
			</Collapse>
		</Grid>
	);
}
