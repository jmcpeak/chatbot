import { useCallback, useState } from "react";

export default function useIsHovered() {
	const [hovering, setHovering] = useState(false);

	const onMouseEnter = useCallback(() => setHovering(true), []);
	const onMouseLeave = useCallback(() => setHovering(false), []);

	return { hovering, onMouseEnter, onMouseLeave };
}
