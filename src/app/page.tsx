"use client";

import useMainHeight from "@/app/use-main-height";
import Add from "@/components/button/menu/add/add";
import useStore from "@/hooks/use-store";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useMemo } from "react";

export default function Home() {
	const open = useStore((state) => state.drawerOpen);
	const height = useMainHeight();
	const sx = useMemo(
		() => ({
			display: "grid",
			height,
			ml: open ? 31 : 0,
			placeItems: "center",
		}),
		[height, open],
	);

	return (
		<Box component="main" sx={sx}>
			<Container maxWidth="md">
				<Box>
					<Typography variant="h5">What's on the agenda today?</Typography>
					<Paper>
						<Grid container direction="column" spacing={2} sx={{ p: 1 }}>
							<Grid>
								<TextField fullWidth placeholder="Ask anything" />
							</Grid>
							<Grid>
								<Add />
							</Grid>
						</Grid>
					</Paper>
				</Box>
			</Container>
		</Box>
	);
}
