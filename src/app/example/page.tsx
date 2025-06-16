"use client";

import useStore from "@/hooks/use-store";
import Add from "@mui/icons-material/Add";
import Pageview from "@mui/icons-material/Pageview";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useMutation } from "@tanstack/react-query";
import { type ChangeEvent, useCallback, useMemo, useState } from "react";

export default function Page() {
	const [input, setInput] = useState("");
	const [response, setResponse] = useState("");
	const open = useStore((state) => state.drawerOpen);
	const sx = useMemo(
		() => ({
			ml: open ? 31 : 0,
			mt: "25dvh",
		}),
		[open],
	);

	const { mutate, isPending } = useMutation({
		mutationFn: async (prompt: string) => {
			const res = await fetch("/api/stream", {
				method: "POST",
				body: JSON.stringify({ prompt }),
			});
			if (!res.body) return "No response body received.";
			const reader = res.body.getReader();
			const decoder = new TextDecoder("utf-8");
			let result = "";
			while (true) {
				const { value, done } = await reader.read();
				if (done) break;
				const chunk = decoder.decode(value);
				result += chunk;
				setResponse((prev) => prev + chunk);
			}
			return result;
		},
	});

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setInput(e.target.value);
		},
		[],
	);
	const handleStream = useCallback(() => {
		mutate(input);
	}, [input, mutate]);

	return (
		<Box sx={sx}>
			<Card>
				<CardHeader>
					<Chip
						avatar={
							<Avatar alt="Natacha">
								<Pageview fontSize="small" />
							</Avatar>
						}
						label="Avatar"
						variant="outlined"
					/>
				</CardHeader>
				<CardActionArea>
					<TextField
						fullWidth
						placeholder="Ask something"
						onChange={handleChange}
						slotProps={{ inputLabel: { shrink: false } }}
						value={input}
						variant="standard"
					/>
				</CardActionArea>
				<CardContent sx={{ minWidth: 600 }}>
					<Button
						variant="contained"
						onClick={handleStream}
						disabled={isPending}
					>
						{isPending ? "Loading..." : "Submit"}
					</Button>
					<Paper elevation={3} sx={{ mt: 3, p: 2, minHeight: 100 }}>
						<Typography
							variant="body1"
							component="div"
							sx={{ whiteSpace: "pre-wrap" }}
						>
							{response}
						</Typography>
					</Paper>
				</CardContent>
				<CardActions>
					<IconButton>
						<Add fontSize="small" />
					</IconButton>
				</CardActions>
			</Card>
		</Box>
	);
}
