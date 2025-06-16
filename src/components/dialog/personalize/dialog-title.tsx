import HelpOutlineOutlined from "@mui/icons-material/HelpOutlineOutlined";
import DialogTitleMui from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const sx = { "&.MuiDialogTitle-root": { lineHeight: 1.2 } };

export default function DialogTitle() {
	return (
		<DialogTitleMui sx={sx}>
			<Grid container direction="column">
				<Grid>Customize CFA-GPT</Grid>
				<Grid>
					<Typography color="textDisabled" variant="caption">
						<Grid container gap={0.5}>
							<Grid>
								Introduce yourself to get better, more personalized responses
							</Grid>
							<Grid>
								<Tooltip title="ChatGPT will use the information you provide to tailor its responses to you. Learn more about how we use your data.">
									<HelpOutlineOutlined fontSize="small" />
								</Tooltip>
							</Grid>
						</Grid>
					</Typography>
				</Grid>
			</Grid>
		</DialogTitleMui>
	);
}
