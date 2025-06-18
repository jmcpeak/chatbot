"use client";

import useInput from "@/app/example/use-input";
import usePage from "@/app/use-page";
import CardPrompt from "@/components/card/prompt/card-prompt";
import SystemHeaderMessage from "@/components/grid/system-header-message/system-header-message";
import ThinkingSkeleton from "@/components/thinking-skeleton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const sxBox = {
	display: "flex",
	flexDirection: "column",
	minHeight: "100vh",
};
const sxContainerNoResponse = { mt: "25dvh" };
const sxContainerWithResponse = { bottom: 0, position: "sticky" };
const sxPaper = { mt: 3, p: 2, flex: 1, overflow: "auto" };
const sxTypography = { whiteSpace: "pre-wrap" };

export default function Home() {
	const [isPending, value, response, onChange, onKeyDown] = useInput();
	const { maxWidth } = usePage();

	return (
		<Box sx={sxBox}>
			{isPending && <ThinkingSkeleton active />}
			{response !== "" && (
				<Paper elevation={3} sx={sxPaper}>
					<Typography variant="body1" component="h1" sx={sxTypography}>
						{response}
					</Typography>
				</Paper>
			)}
			<Container
				maxWidth={maxWidth}
				sx={response === "" ? sxContainerNoResponse : sxContainerWithResponse}
			>
				<Grid container direction="column" spacing={4}>
					{response === "" && <SystemHeaderMessage />}
					<Grid>
						<CardPrompt
							onChange={onChange}
							onKeyDown={onKeyDown}
							value={value}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
