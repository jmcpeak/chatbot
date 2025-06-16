"use client";

import usePage from "@/app/use-page";
import CardPrompt from "@/components/card/prompt/card-prompt";
import SystemHeaderMessage from "@/components/grid/system-header-message/system-header-message";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function Home() {
	const [maxWidth, sx] = usePage();

	return (
		<Box sx={sx}>
			<Container maxWidth={maxWidth}>
				<Grid container direction="column" spacing={4}>
					<SystemHeaderMessage />
					<Grid>
						<CardPrompt />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
