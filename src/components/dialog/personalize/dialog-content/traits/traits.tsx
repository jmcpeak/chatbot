import Add from "@mui/icons-material/Add";
import HelpOutlineOutlined from "@mui/icons-material/HelpOutlineOutlined";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";

const chipLabels = [
	"Opinionated",
	"Direct",
	"Empathetic",
	"Respectful",
	"Pragmatic",
	"Humble",
	"Corporate",
	"Professional",
	"Chill",
	"Silly",
	"Outside the box",
];

const Title = () => (
	<>
		You can tell ChatGPT to do things like...
		<ul>
			<li>Use a formal, professional tone.</li>
			<li>Be casual and chatty.</li>
			<li>
				Be opinionated. If a question could have multiple answers, try to give
				only the best one.
			</li>
		</ul>
	</>
);
const Label = () => (
	<Grid container gap={0.5}>
		<Grid>What traits should ChatGPT have?</Grid>
		<Grid>
			<Tooltip title={<Title />}>
				<HelpOutlineOutlined fontSize="small" />
			</Tooltip>
		</Grid>
	</Grid>
);

export default function Traits() {
	const handleClick = () => {};

	return (
		<Grid container direction="column" spacing={1}>
			<Grid>
				<TextField
					fullWidth
					id="traits"
					name="traits"
					label={<Label />}
					type="text"
					variant="outlined"
					value="Be knowledgable"
				/>
			</Grid>
			<Grid>
				<Grid container spacing={0.5}>
					{chipLabels.map((label) => (
						<Grid key={label}>
							<Chip
								icon={<Add fontSize="small" />}
								onClick={handleClick}
								label={label}
								variant="outlined"
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
}
