"use client";

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
	(e: KeyboardEvent<HTMLInputElement>) => void,
];

export default function useInput(): Tuple {
	const [input, setInput] = useState("");
	const [response, setResponse] = useState("");
	const { mutate, isPending } = useMutation({
		mutationFn: async (prompt: string) => {
			const res = await fetch("/api/stream", {
				method: "POST",
				body: JSON.stringify({ prompt }),
			});

			if (!res.body) return "No response body received.";

			const reader = res.body.getReader();
			const decoder = new TextDecoder("utf-8");
			let result = "";

			while (true) {
				const { value, done } = await reader.read();
				if (done) break;
				const chunk = decoder.decode(value);
				result += chunk;
				setResponse((prev) => prev + chunk);
			}

			return result;
		},
	});

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setInput(e.target.value);
		},
		[],
	);
	const handleKeyDown = useCallback(
		(e: KeyboardEvent<HTMLInputElement>) => {
			if (e.key === "Enter") {
				mutate(input);
				setInput("");
			}
		},
		[input, mutate],
	);

	return [isPending, input, response, handleChange, handleKeyDown];
}
