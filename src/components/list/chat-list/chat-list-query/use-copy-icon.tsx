import useCopyTextToClipboard from "@/hooks/use-copy-text-to-clipboard";
import { useCallback, useState } from "react";
import { useTimeout } from "usehooks-ts";

type Tuple = [visible: boolean, onToggle: () => void, resetValue: () => void];
type Value = {
	visible: boolean;
	delayValue: null | number;
};

const initialState: Value = {
	visible: true,
	delayValue: null,
};

export default function useCopyIcon(
	clearTooltip: () => void,
	text: string,
	delay = 1500,
): Tuple {
	const [value, setValue] = useState<Value>(initialState);
	const copyToClipboard = useCopyTextToClipboard(text);

	const resetValue = useCallback(() => {
		setValue((prevState) => ({
			visible: !prevState.visible,
			delayValue: prevState.delayValue ? null : delay,
		}));
	}, [delay]);
	const onToggle = useCallback(() => {
		if (value.visible && !value.delayValue) {
			copyToClipboard();
			clearTooltip();
			resetValue();
		}
	}, [
		clearTooltip,
		copyToClipboard,
		resetValue,
		value.visible,
		value.delayValue,
	]);

	useTimeout(resetValue, value.delayValue);

	return [value.visible, onToggle, resetValue];
}
