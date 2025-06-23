import Logo from "@/app/@drawer/logo";
import CloseSidebarButton from "@/components/button/sidebar/close-sidebar";
import Grid from "@mui/material/Grid";
import ToolbarMui from "@mui/material/Toolbar";

const sxGrid = { width: "100%" };
const sxToolbar = { "&.MuiToolbar-root": { pl: 2, pr: 2 } };

export default function Toolbar() {
	return (
		<ToolbarMui sx={sxToolbar}>
			<Grid container alignItems="center" sx={sxGrid}>
				<Grid size="grow">
					<Logo />
				</Grid>
				<Grid>
					<CloseSidebarButton />
				</Grid>
			</Grid>
		</ToolbarMui>
	);
}
