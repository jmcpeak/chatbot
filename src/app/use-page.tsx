import useStore from "@/hooks/use-store";
import type { Breakpoint } from "@mui/system";
import { useMemo } from "react";

type Tuple = [Breakpoint, { ml: number; mt: string }];

export default function usePage(): Tuple {
	const open = useStore((state) => state.drawerOpen);
	const sx = useMemo(
		() => ({
			ml: open ? 31 : 0,
			mt: "25dvh",
		}),
		[open],
	);

	return [open ? "sm" : "md", sx];
}
