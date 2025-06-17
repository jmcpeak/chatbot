import { usePathname } from "next/navigation";

export default function useIdFromPathname() {
	const pathname = usePathname();
	const segments = pathname.split("/").filter(Boolean);

	return segments.at(-1);
}
