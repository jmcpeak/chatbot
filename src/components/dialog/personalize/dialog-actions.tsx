import Button from "@mui/material/Button";
import DialogActionsMui from "@mui/material/DialogActions";
import Divider from "@mui/material/Divider";
import FormControlLabel, {
	type FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

type Props = {
	onCancelAction?: () => void;
};

const slotProps: FormControlLabelProps["slotProps"] = {
	typography: { variant: "body2" },
};
const sx = { width: "100%", pl: 2, pr: 1.5, pt: 1.5 };

export default function DialogActions({ onCancelAction }: Props) {
	return (
		<>
			<Divider />
			<DialogActionsMui>
				<Grid container spacing={2} sx={sx}>
					<Grid size="grow">
						<FormControlLabel
							value="enabled"
							control={<Switch color="primary" />}
							label="Enable for new chats"
							labelPlacement="end"
							checked
							slotProps={slotProps}
						/>
					</Grid>
					<Grid>
						<Button color="inherit" size="small" onClick={onCancelAction}>
							Cancel
						</Button>
					</Grid>
					<Grid>
						<Button
							size="small"
							sx={{ backgroundColor: "text.disabled" }}
							type="submit"
							variant="contained"
						>
							Save
						</Button>
					</Grid>
				</Grid>
			</DialogActionsMui>
		</>
	);
}
