import useMutationChatSearch from "@/hooks/mutations/use-mutation-chat-search";
import { type ChangeEvent, useCallback } from "react";
import { useDebounceCallback } from "usehooks-ts";

export default function useInput() {
	const { mutate } = useMutationChatSearch();
	const debounced = useDebounceCallback(mutate, 500);

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			debounced(e.target.value);
		},
		[debounced],
	);

	return { onChange };
}
