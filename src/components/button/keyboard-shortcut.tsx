import useOS from "@/hooks/use-os";
import Typography from "@mui/material/Typography";

export type ShortcutProps = {
	mac?: string;
	windows?: string;
};
type Props = {
	shortcut?: ShortcutProps;
	visible?: boolean;
};

const sx = { color: "text.disabled" };

export default function KeyboardShortcut({ shortcut, visible = false }: Props) {
	const os = useOS();

	return visible && shortcut ? (
		<Typography variant="body2" sx={sx}>
			{os === "mac" ? shortcut.mac : shortcut.windows}
		</Typography>
	) : null;
}
