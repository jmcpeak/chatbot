import useMutationNewChat from "@/hooks/mutations/use-mutation-new-chat";
import useMutationStream from "@/hooks/mutations/use-mutation-stream";
import useStore, { type Store } from "@/hooks/use-store";
import {
	type ChangeEvent,
	type KeyboardEvent,
	useCallback,
	useEffect,
} from "react";
import { useShallow } from "zustand/react/shallow";

type Tuple = [
	boolean,
	string,
	string,
	(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
	(e: KeyboardEvent<HTMLInputElement | HTMLDivElement>) => void,
];

const selector = (state: Store) => ({
	prompt: state.prompt,
	setPrompt: state.setPrompt,
	setPromptMutator: state.setPromptMutator,
	setPromptSubmitColor: state.setPromptSubmitColor,
	streamedResponse: state.streamedResponse.at(0) ?? "",
	setStreamedResponse: state.setStreamedResponse,
});

export default function useInput(): Tuple {
	const {
		prompt,
		setPrompt,
		setPromptMutator,
		setPromptSubmitColor,
		streamedResponse,
		setStreamedResponse,
	} = useStore(useShallow(selector));
	const { mutate: mutateNew } = useMutationNewChat();
	const { mutate: mutateStream, isPending } =
		useMutationStream(setStreamedResponse);

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setPrompt(e.target.value);
		},
		[setPrompt],
	);
	const handleKeyDown = useCallback(
		(e: KeyboardEvent<HTMLInputElement | HTMLDivElement>) => {
			if (e.key === "Enter") {
				mutateStream(prompt);
				mutateNew(prompt);
				setPrompt("");
				setPromptSubmitColor("error");
			}
		},
		[mutateStream, mutateNew, prompt, setPrompt, setPromptSubmitColor],
	);

	useEffect(() => {
		setPromptMutator(mutateStream);
	}, [mutateStream, setPromptMutator]);

	return [isPending, prompt, streamedResponse, handleChange, handleKeyDown];
}
