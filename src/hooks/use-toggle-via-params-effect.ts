import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

type Tuple = [boolean, () => void];

const OFF = "0";
const ON = "1";

/**
 * Custom hook to toggle a boolean state via URL search parameters.
 *
 * @param {string} name - The name of the search parameter to toggle.
 * @returns {[boolean, () => void]} - Returns the current state and a function to toggle it.
 */
export default function useToggleViaParamsEffect(name: string): Tuple {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const initialState = !searchParams.has(name) || searchParams.get(name) === ON;
	const [value, setValue] = useState(initialState);

	const onToggle = useCallback(() => {
		const newState = !initialState;
		const queryParams = !newState ? `?${name}=${newState ? ON : OFF}` : "";

		router.push(`${pathname}${queryParams}`);
	}, [initialState, name, pathname, router]);

	useEffect(() => {
		setValue(initialState);
	}, [initialState]);

	return [value, onToggle];
}
