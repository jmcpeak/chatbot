import { useCallback, useState } from "react";

type Tuple = [inTransition: boolean, onToggle: () => void];

export default function useToggleVisibility(initialState = true): Tuple {
	const [inTransition, setInTransition] = useState(initialState);

	const onToggle = useCallback(() => {
		setInTransition((prevState) => !prevState);
	}, []);

	return [inTransition, onToggle];
}
