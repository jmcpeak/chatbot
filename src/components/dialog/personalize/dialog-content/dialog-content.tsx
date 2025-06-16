import type { Profile } from "@/app/api/profile/route";
import Traits from "@/components/dialog/personalize/dialog-content/traits/traits";
import HelpOutlineOutlined from "@mui/icons-material/HelpOutlineOutlined";
import DialogContentMui from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { useQuery } from "@tanstack/react-query";

const sx = { minWidth: 600, mt: 2 };

export default function DialogContent() {
	const { data } = useQuery({
		queryKey: ["profile"],
		queryFn: async (): Promise<Profile> => {
			const res = await fetch("/api/profile");

			return res.json();
		},
		staleTime: 10000, // 10 seconds
	});

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
						value={data?.preferredName ?? ""}
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
						value={data?.responsibilities ?? ""}
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
						value={data?.other ?? ""}
					/>
				</Grid>
			</Grid>
		</DialogContentMui>
	);
}
