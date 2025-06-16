import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const NAME = "drawer";
const CLOSE = "0";
const OPEN = "1";

/**
 * Custom hook to manage the state of a drawer component based on URL search parameters.
 * It toggles the drawer's open/close state and updates the URL accordingly.
 *
 * @returns {Object} An object containing the current open state and a function to toggle the drawer.
 */
export default function useDrawerEffect() {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const initialState =
		!searchParams.has(NAME) || searchParams.get(NAME) === OPEN;
	const [state, setState] = useState(initialState);

	const onChange = useCallback(() => {
		const newState = !initialState;
		const queryParams = !newState ? `?${NAME}=${newState ? OPEN : CLOSE}` : "";

		router.push(`${pathname}${queryParams}`);
	}, [initialState, pathname, router]);

	useEffect(() => {
		setState(initialState);
	}, [initialState]);

	return { open: state, handleClick: onChange };
}
