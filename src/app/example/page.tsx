"use client";

import { Add, Pageview } from "@mui/icons-material";
import {
	Avatar,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardHeader,
	Chip,
	IconButton,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { type ChangeEvent, useState } from "react";

export default function Page() {
	const [input, setInput] = useState("");
	const [response, setResponse] = useState("");
	const [loading, setLoading] = useState(false);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setInput(e.target.value);
	};
	const handleStream = async () => {
		setLoading(true);
		setResponse("");

		const res = await fetch("/api/stream", {
			method: "POST",
			body: JSON.stringify({ prompt: input }),
			headers: { "Content-Type": "application/json" },
		});

		if (!res.body) {
			setResponse("No response body received.");
			setLoading(false);
			return;
		}

		const reader = res.body.getReader();
		const decoder = new TextDecoder("utf-8");

		while (true) {
			const { value, done } = await reader.read();
			if (done) break;
			const chunk = decoder.decode(value);
			setResponse((prev) => prev + chunk);
		}

		setLoading(false);
	};

	return (
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
			<CardContent>
				<Button variant="contained" onClick={handleStream} disabled={loading}>
					{loading ? "Loading..." : "Submit"}
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
	);
}
