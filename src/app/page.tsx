"use client";

import usePage from "@/app/use-page";
import Add from "@/components/button/menu/add/add";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
	const [maxWidth, sx] = usePage();

	const { data } = useQuery({
		queryKey: ["headerMessage"],
		queryFn: async () => {
			const res = await fetch("/api/header/message");

			return res.json();
		},
		staleTime: 600000, // 10 minutes in milliseconds
	});

	return (
		<Box sx={sx}>
			<Container maxWidth={maxWidth}>
				<Grid container direction="column" spacing={4}>
					<Grid display="flex" justifyContent="center">
						<Typography variant="h5">{data.message}</Typography>
					</Grid>
					<Grid>
						<Card>
							<Grid
								container
								direction="column"
								spacing={2}
								sx={{ pt: 2, pl: 3, pb: 1 }}
							>
								<Grid>
									<TextField
										fullWidth
										placeholder="Ask anything"
										variant="standard"
										slotProps={{
											input: { disableUnderline: true, sx: { border: "none" } },
										}}
									/>
								</Grid>
								<Grid>
									<Add />
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
