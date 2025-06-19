import { useCallback, useState } from "react";

export default function useOnHoverAndCopyIcon<T extends HTMLElement>(
	optionalTooltip = "",
) {
	const [tooltip, setTooltip] = useState(optionalTooltip);
	const [hovering, setHovering] = useState(false);

	const clearTooltip = useCallback(() => {
		setTooltip("");
	}, []);
	const onCopyMouseLeave = useCallback(() => {
		setTooltip(optionalTooltip);
	}, [optionalTooltip]);
	const onMouseEnter = useCallback(() => {
		setHovering(true);
	}, []);
	const onMouseLeave = useCallback(() => {
		setHovering(false);
		setTooltip(optionalTooltip);
	}, [optionalTooltip]);

	return {
		clearTooltip,
		hovering,
		onCopyMouseLeave,
		onMouseEnter,
		onMouseLeave,
		tooltip,
	};
}
