import { useCallback, useState } from "react";

export default function useIsHovered() {
	const [visible, setVisible] = useState(false);

	const onMouseEnter = useCallback(() => setVisible(true), []);
	const onMouseLeave = useCallback(() => setVisible(false), []);

	return { onMouseEnter, onMouseLeave, visible };
}
