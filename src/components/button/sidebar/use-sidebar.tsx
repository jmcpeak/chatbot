import useStore from "@/hooks/use-store";
import { useCallback, useState } from "react";

/**
 * Custom hook to manage the state of a sidebar component.
 * It provides functionality to open/close the sidebar and handle mouse events.
 *
 * @returns {Object} An object containing the current drawer state and event handlers.
 */
export default function useSidebar() {
	const [open, setOpen] = useState(false);
	const drawerOpen = useStore((state) => state.drawerOpen);
	const setDrawerOpen = useStore((state) => state.setDrawerOpen);

	const handleMouseEnter = useCallback(() => {
		setOpen(true);
	}, []);
	const handleMouseLeave = useCallback(() => {
		setOpen(false);
	}, []);
	const handleClickAndLeave = useCallback(() => {
		setDrawerOpen((prevDrawerOpen) => !prevDrawerOpen);
		handleMouseLeave();
	}, [handleMouseLeave, setDrawerOpen]);

	return {
		drawerOpen,
		onClick: handleClickAndLeave,
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		open,
	};
}
