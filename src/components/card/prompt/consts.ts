import type { TextFieldProps } from "@mui/material/TextField";

export const slotProps: TextFieldProps["slotProps"] = {
	input: {
		autoComplete: "off",
		disableUnderline: true,
		spellCheck: false,
		sx: { border: "none" },
	},
};
export const sxGrid = { pt: 2, pl: 3, pb: 1, pr: 2 };
