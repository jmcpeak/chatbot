import useStore, { type Store } from "@/hooks/use-store";
import type { Theme } from "@mui/system";
import { type MutationStatus, useMutationState } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import { useShallow } from "zustand/react/shallow";

const mutationStateOptions = {
	filters: {
		mutationKey: ["mutateStream"],
		status: "pending" as MutationStatus,
	},
};
const selector = (state: Store) => ({
	prompt: state.prompt,
	promptMutator: state.promptMutator,
	promptSubmitColor: state.promptSubmitColor,
	setPrompt: state.setPrompt,
	setPromptSubmitColor: state.setPromptSubmitColor,
});

export default function useButtonConfirmBusy() {
	const {
		prompt,
		promptMutator,
		promptSubmitColor,
		setPrompt,
		setPromptSubmitColor,
	} = useStore(useShallow(selector));
	const isPending = useMutationState(mutationStateOptions).length > 0;
	const sx = useMemo(() => {
		const color = (theme: Theme) =>
			theme.palette[promptSubmitColor].contrastText;

		return {
			backgroundColor: (theme: Theme) => theme.palette[promptSubmitColor].dark,
			color,
			"&:hover": {
				backgroundColor: (theme: Theme) =>
					theme.palette[promptSubmitColor].main,
				color,
			},
		};
	}, [promptSubmitColor]);

	const onEnterOrExited = useCallback(() => {
		setPromptSubmitColor("primary");
	}, [setPromptSubmitColor]);
	const onClick = useCallback(() => {
		promptMutator(prompt);
		setPrompt("");
		setPromptSubmitColor("error");
	}, [prompt, promptMutator, setPrompt, setPromptSubmitColor]);

	return {
		in: prompt !== "" || isPending,
		isPending,
		onClick,
		onEnter: onEnterOrExited,
		onExited: onEnterOrExited,
		sx,
	};
}
