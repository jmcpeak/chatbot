import CloseSidebarButton from "@/components/button/sidebar/close-sidebar";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ToolbarMui from "@mui/material/Toolbar";

const sxAvatar = { width: 20, height: 20 };
const sxGrid = { width: "100%" };
const sxToolbar = { "&.MuiToolbar-root": { pl: 2, pr: 2 } };

export default function Toolbar() {
	return (
		<ToolbarMui sx={sxToolbar}>
			<Grid container alignItems="center" sx={sxGrid}>
				<Grid size="grow">
					<IconButton component="a" href="/example">
						<Avatar src="/cfa-bw-crop.png" alt="CFA Institute" sx={sxAvatar} />
					</IconButton>
				</Grid>
				<Grid>
					<CloseSidebarButton />
				</Grid>
			</Grid>
		</ToolbarMui>
	);
}
