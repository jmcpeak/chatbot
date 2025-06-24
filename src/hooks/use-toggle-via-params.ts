import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type Tuple = [boolean, () => void];

/**
 * Custom hook to toggle a boolean state via URL search parameters.
 *
 * @param {string} name - The name of the search parameter to toggle.
 * @returns {[boolean, () => void]} - Returns the current state and a function to toggle it.
 */
export default function useToggleViaParams(name: string): Tuple {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();

	const onToggle = useCallback(() => {
		const queryParams = !searchParams.has(name) ? `?${name}` : "";

		router.push(`${pathname}${queryParams}`);
	}, [name, pathname, router, searchParams]);

	return [searchParams.has(name), onToggle];
}
