import { useSearchParams } from "next/navigation";

/**
 * see useToggleViaParams
 */
export default function useGetViaParams(name: string) {
	const searchParams = useSearchParams();

	return searchParams.has(name);
}
