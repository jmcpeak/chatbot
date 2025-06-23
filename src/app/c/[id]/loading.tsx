import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

const sx = {
	minHeight: {
		xs: "calc(100vh - 56px)", // mobile toolbar height
		sm: "calc(100vh - 64px)", // desktop toolbar height
	},
	justifyContent: "center",
};

export default function Loading() {
	return (
		<Box component="main">
			<Grid
				alignItems="center"
				container
				direction="column"
				spacing={2}
				sx={sx}
			>
				<Grid>
					<Typography variant="h5">
						Just a sec — we’re brewing ☕ something up...
					</Typography>
				</Grid>
				<Grid>
					<Skeleton width={150} variant="text" />
				</Grid>
			</Grid>
		</Box>
	);
}
