import useStore, { type Store } from "@/hooks/use-store";
import { useMutation } from "@tanstack/react-query";
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
	const { mutate, isPending } = useMutation({
		mutationKey: ["mutateStream"],
		mutationFn: async (prompt: string) => {
			const res = await fetch("/api/stream", {
				method: "POST",
				body: JSON.stringify({ prompt }),
			});

			if (!res.body) return "No response body received.";

			const reader = res.body.getReader();
			const decoder = new TextDecoder("utf-8");

			while (true) {
				const { value, done } = await reader.read();
				if (done) break;
				const chunk = decoder.decode(value);

				setStreamedResponse((prev) => [prev + chunk]);
			}
		},
	});

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setPrompt(e.target.value);
		},
		[setPrompt],
	);
	const handleKeyDown = useCallback(
		(e: KeyboardEvent<HTMLInputElement | HTMLDivElement>) => {
			if (e.key === "Enter") {
				mutate(prompt);
				setPrompt("");
				setPromptSubmitColor("error");
			}
		},
		[mutate, prompt, setPrompt, setPromptSubmitColor],
	);

	useEffect(() => {
		setPromptMutator(mutate);
	}, [mutate, setPromptMutator]);

	return [isPending, prompt, streamedResponse, handleChange, handleKeyDown];
}
