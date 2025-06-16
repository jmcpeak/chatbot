import { useMemo } from "react";
import { useWindowSize } from "usehooks-ts";

export default function useMainHeight() {
	const { height } = useWindowSize({ initializeWithValue: false });

	return useMemo(() => (height ? height - 64 : 0), [height]);
}
