import { useWindowSize } from "usehooks-ts";

export default function useMainHeight() {
	const { height } = useWindowSize();

	return height - 64;
}
