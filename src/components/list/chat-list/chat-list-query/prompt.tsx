"use client";

import { slotProps } from "@/components/card/prompt/consts";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import { useTheme } from "@mui/system";

type Props = TextFieldProps & {
	editMode?: boolean;
	onCancelAction: () => void;
};

export default function Prompt({ onCancelAction, ...props }: Props) {
	const { breakpoints } = useTheme();

	return (
		<Grid container direction="column" spacing={2}>
			<Grid>
				<TextField
					{...props}
					autoFocus
					placeholder="Ask anything"
					slotProps={slotProps}
					sx={{ width: breakpoints.values.sm - 100 }}
					variant="standard"
				/>
			</Grid>
			<Grid>
				<Grid container spacing={1} justifyContent="flex-end">
					<Grid>
						<Button color="inherit" onClick={onCancelAction} size="small">
							Cancel
						</Button>
					</Grid>
					<Grid>
						<Button onClick={onCancelAction} size="small" variant="contained">
							Send
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
