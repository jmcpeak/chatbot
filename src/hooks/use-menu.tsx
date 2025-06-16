import { type MouseEvent, useCallback, useState } from "react";

type Tuple = [
	anchorEl: null | HTMLElement,
	handleClick: (event: MouseEvent<HTMLElement>) => void,
	handleClose: () => void,
];

/**
 * Custom hook to manage the state of a menu component.
 * It provides functionality to open/close the menu and handle mouse events.
 *
 * @returns {Tuple} An array containing the current anchor element, a function to handle click events, and a function to close the menu.
 */
export default function useMenu(): Tuple {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleClick = useCallback((event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	}, []);
	const handleClose = useCallback(() => {
		setAnchorEl(null);
	}, []);

	return [anchorEl, handleClick, handleClose];
}
