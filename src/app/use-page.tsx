import useStore from "@/hooks/use-store";
import type { Breakpoint } from "@mui/system";
import { useMemo } from "react";

export default function usePage() {
	const open = useStore((state) => state.drawerOpen);
	const maxWidth: Breakpoint = useMemo(() => (open ? "sm" : "md"), [open]);
	const sx = useMemo(() => ({ ml: open ? 31 : 0 }), [open]);

	return { maxWidth, sx };
}
