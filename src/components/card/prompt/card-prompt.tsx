import Actions from "@/components/card/prompt/actions/actions";
import CardPromptWarning from "@/components/card/prompt/card-prompt-warning";
import { slotProps, sxCard, sxGrid } from "@/components/card/prompt/consts";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField, { type TextFieldProps } from "@mui/material/TextField";

const sx = { display: "flex", flexDirection: "column" };

export default function CardPrompt(props: TextFieldProps) {
	return (
		<Box sx={sx}>
			<Card sx={sxCard}>
				<Grid container direction="column" spacing={2} sx={sxGrid}>
					<Grid>
						<TextField
							{...props}
							autoFocus
							fullWidth
							placeholder="Ask anything"
							slotProps={slotProps}
							variant="standard"
						/>
					</Grid>
					<Grid>
						<Actions />
					</Grid>
				</Grid>
			</Card>
			<CardPromptWarning />
		</Box>
	);
}
