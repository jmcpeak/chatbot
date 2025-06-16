"use client";

import PromptTools from "@/app/prompt-tools";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import type { TextFieldProps } from "@mui/material/TextField";
import TextField from "@mui/material/TextField";

const slotProps: TextFieldProps["slotProps"] = {
	input: {
		autoComplete: "off",
		disableUnderline: true,
		sx: { border: "none" },
	},
};
const sxCard = { backgroundColor: "rgb(48,48, 48)" };
const sxGrid = { pt: 2, pl: 3, pb: 1, pr: 2 };

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
