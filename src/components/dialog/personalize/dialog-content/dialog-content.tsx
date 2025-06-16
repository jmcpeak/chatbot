import Traits from "@/components/dialog/personalize/dialog-content/traits/traits";
import HelpOutlineOutlined from "@mui/icons-material/HelpOutlineOutlined";
import DialogContentMui from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";

const sx = { minWidth: 600, mt: 2 };

export default function DialogContent() {
	return (
		<DialogContentMui sx={sx}>
			<Grid container direction="column" spacing={4}>
				<Grid>
					<TextField
						autoFocus
						fullWidth
						id="name"
						name="name"
						label="What should ChatGPT call you?"
						type="text"
						variant="outlined"
						value="Jason"
					/>
				</Grid>
				<Grid>
					<TextField
						fullWidth
						id="job"
						name="job"
						label="What do you do?"
						type="text"
						variant="outlined"
						value="Senior Lead Front End Developer"
					/>
				</Grid>
				<Grid>
					<Traits />
				</Grid>
				<Grid>
					<TextField
						fullWidth
						id="anything-else"
						multiline
						minRows={5}
						name="anything-else"
						placeholder="Interests, values, or preferences to keep in mind"
						label={
							<Grid container gap={0.5}>
								<Grid>Anything else ChatGPT should know about you?</Grid>
								<Grid>
									<Tooltip
										title={
											<>
												You can share things like...
												<ul>
													<li>I love hiking and jazz.</li>
													<li>I'm vegetarian.</li>
													<li>I'm trying to learn French.</li>
												</ul>
											</>
										}
									>
										<HelpOutlineOutlined fontSize="small" />
									</Tooltip>
								</Grid>
							</Grid>
						}
						type="text"
						variant="outlined"
						value="Be knowledgable"
					/>
				</Grid>
			</Grid>
		</DialogContentMui>
	);
}
