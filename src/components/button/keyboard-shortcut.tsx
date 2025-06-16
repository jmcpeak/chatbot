import Typography from "@mui/material/Typography";

const sx = { color: "text.disabled" };

export default function KeyboardShortcut({ children = "", visible = false }) {
	return visible ? (
		<Typography variant="body2" sx={sx}>
			{children}
		</Typography>
	) : null;
}
