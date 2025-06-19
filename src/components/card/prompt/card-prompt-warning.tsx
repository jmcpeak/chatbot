import Typography from "@mui/material/Typography";

const sx = { textAlign: "center" };

export default function CardPromptWarning() {
	return (
		<Typography variant="caption" sx={sx}>
			CFA-GPT can make mistakes. Check important info.
		</Typography>
	);
}
