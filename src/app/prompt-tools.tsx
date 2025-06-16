import Add from "@/components/button/tools/add/add";
import Dictate from "@/components/button/tools/dictate/dictate";
import Tools from "@/components/button/tools/tools/tools";
import Grid from "@mui/material/Grid";

export default function PromptTools() {
	return (
		<Grid container alignItems="center">
			<Grid>
				<Add />
			</Grid>
			<Grid size="grow">
				<Tools />
			</Grid>
			<Grid>
				<Dictate />
			</Grid>
		</Grid>
	);
}
