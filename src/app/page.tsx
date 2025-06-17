"use client";

import useInput from "@/app/example/use-input";
import usePage from "@/app/use-page";
import CardPrompt from "@/components/card/prompt/card-prompt";
import SystemHeaderMessage from "@/components/grid/system-header-message/system-header-message";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const sxNoResponse = { mt: "25dvh" };
const sxResponse = {
	position: "fixed",
	bottom: 0,
	// left: 0,
	// right: 0,
};

export default function Home() {
	const [isPending, value, response, onChange, onKeyDown] = useInput();
	const { maxWidth } = usePage();

	return (
		<>
			<Paper elevation={3} sx={{ mt: 3, p: 2, minHeight: 100 }}>
				<Typography
					variant="body1"
					component="h1"
					sx={{ whiteSpace: "pre-wrap" }}
				>
					{response}
				</Typography>
			</Paper>
			<Container maxWidth={maxWidth} sx={response ? sxResponse : sxNoResponse}>
				<Grid container direction="column" spacing={4}>
					{!response && <SystemHeaderMessage />}
					<Grid>
						<CardPrompt
							onChange={onChange}
							onKeyDown={onKeyDown}
							value={value}
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
