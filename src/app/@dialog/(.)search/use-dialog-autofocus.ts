import { useCallback, useEffect, useRef, useState } from "react";

export default function useDialogAutofocus() {
	const [open, setOpen] = useState(false);
	const [transitionExited, setTransitionExited] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const onClose = useCallback(() => {
		setOpen(false);
	}, []);
	const onTransitionEnter = useCallback(() => {
		setTransitionExited(true);
	}, []);

	useEffect(() => {
		setOpen(true);

		if (transitionExited && inputRef.current) {
			inputRef.current.focus();
		}
	}, [transitionExited]);

	return { inputRef, onClose, onTransitionEnter, open };
}
