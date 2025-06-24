import { useCallback, useEffect, useRef, useState } from "react";

export default function useDialogAutofocus() {
	const [transitionExited, setTransitionExited] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const onTransitionEnter = useCallback(() => {
		setTransitionExited(true);
	}, []);

	useEffect(() => {
		if (transitionExited && inputRef.current) {
			inputRef.current.focus();
		}
	}, [transitionExited]);

	return { inputRef, onTransitionEnter };
}
