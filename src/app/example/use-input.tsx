import useStore from "@/hooks/use-store";
import { useMutation } from "@tanstack/react-query";
import {
	type ChangeEvent,
	type KeyboardEvent,
	useCallback,
	useState,
} from "react";

type Tuple = [
	boolean,
	string,
	string,
	(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
	(e: KeyboardEvent<HTMLInputElement | HTMLDivElement>) => void,
];

export default function useInput(): Tuple {
	const [input, setInput] = useState("");
	const streamedResponse = useStore(
		(store) => store.streamedResponse.at(0) ?? "",
	);
	const setStreamedResponse = useStore((store) => store.setStreamedResponse);
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
			setInput(e.target.value);
		},
		[],
	);
	const handleKeyDown = useCallback(
		(e: KeyboardEvent<HTMLInputElement | HTMLDivElement>) => {
			if (e.key === "Enter") {
				mutate(input);
				setInput("");
			}
		},
		[input, mutate],
	);

	return [isPending, input, streamedResponse, handleChange, handleKeyDown];
}
