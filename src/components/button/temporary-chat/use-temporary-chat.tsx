import useStore, { type Store } from "@/hooks/use-store";
import { useCallback } from "react";
import { useShallow } from "zustand/react/shallow";

type Tuple = [boolean, () => void];

const selector = (state: Store) => ({
	temporaryChat: state.temporaryChat,
	setTemporaryChat: state.setTemporaryChat,
});

export default function useTemporaryChat(): Tuple {
	const { temporaryChat, setTemporaryChat } = useStore(useShallow(selector));

	const onClick = useCallback(() => {
		setTemporaryChat((prev) => !prev);
	}, [setTemporaryChat]);

	return [temporaryChat, onClick];
}
