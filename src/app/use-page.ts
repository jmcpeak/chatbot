import useDrawerOpen from "@/app/use-drawer-open";
import type { Breakpoint } from "@mui/system";
import { useMemo } from "react";

export default function usePage() {
	const open = useDrawerOpen();
	const maxWidth: Breakpoint = useMemo(() => (open ? "sm" : "md"), [open]);
	const sx = useMemo(() => ({ ml: open ? 31 : 0 }), [open]);

	return { maxWidth, sx };
}
