import { useCallback, useRef, useState } from "react";

export default function useIsHovered<T extends HTMLElement>() {
	const [visible, setVisible] = useState(false);
	const ref = useRef<T | null>(null);

	const onMouseEnter = useCallback(() => setVisible(true), []);
	const onMouseLeave = useCallback(() => setVisible(false), []);

	return { onMouseEnter, onMouseLeave, ref, visible };
}
