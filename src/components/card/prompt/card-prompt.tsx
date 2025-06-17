"use client";

import PromptTools from "@/app/prompt-tools";
import { slotProps, sxCard, sxGrid } from "@/components/card/prompt/consts";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function CardPrompt() {
	return (
		<Card sx={sxCard}>
			<Grid container direction="column" spacing={2} sx={sxGrid}>
				<Grid>
					<TextField
						autoFocus
						fullWidth
						placeholder="Ask anything"
						variant="standard"
						slotProps={slotProps}
					/>
				</Grid>
				<Grid>
					<PromptTools />
				</Grid>
			</Grid>
		</Card>
	);
}
