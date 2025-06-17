"use client";

import usePage from "@/app/use-page";
import CardPrompt from "@/components/card/prompt/card-prompt";
import SystemHeaderMessage from "@/components/grid/system-header-message/system-header-message";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const sx = { mt: "25dvh" };

export default function Home() {
	const { maxWidth } = usePage();

	return (
		<Container maxWidth={maxWidth} sx={sx}>
			<Grid container direction="column" spacing={4}>
				<SystemHeaderMessage />
				<Grid>
					<CardPrompt />
				</Grid>
			</Grid>
		</Container>
	);
}
