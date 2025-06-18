"use client";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

/**
 * Props for <ThinkingIndicator>.
 */
type ThinkingIndicatorProps = {
	/** Show / hide the indicator. */
	active: boolean;
	/** Optional text (defaults to “Thinking…”). */
	label?: string;
	/**
	 * If true, renders an overlay that covers the
	 * nearest positioned parent container.
	 */
	overlay?: boolean;
};

/**
 * A lightweight “ChatGPT‑style” busy indicator.
 *
 * ```tsx
 * <ThinkingIndicator active={isFetching} overlay />
 * ```
 */
export default function ThinkingIndicator({
	active,
	label = "Thinking…",
}: ThinkingIndicatorProps) {
	if (!active) return null;

	return (
		<Box>
			<Typography sx={{ fontWeight: 500 }}>{label}</Typography>
			<Box sx={{ width: "100%", minWidth: 80 }}>
				<LinearProgress color="inherit" sx={{ height: 4, borderRadius: 2 }} />
			</Box>
		</Box>
	);
}
