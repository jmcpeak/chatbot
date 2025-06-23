import type { PaletteMode } from "@mui/material/styles";

const typography = {
	fontFamily: "var(--font-geist-sans)",
};
const components = {
	MuiButton: {
		styleOverrides: {
			root: {
				borderRadius: 24,
				lineHeight: 2,
			},
		},
	},
	MuiDialog: {
		styleOverrides: {
			paper: {
				borderRadius: 24,
			},
		},
	},
	MuiCard: {
		defaultProps: {
			elevation: 2,
		},
		styleOverrides: {
			root: {
				borderRadius: 24,
			},
		},
	},
	MuiMenu: {
		styleOverrides: {
			paper: {
				borderRadius: 8,
			},
		},
	},
};
const componentsLight = { ...components };
const componentsDark = {
	...components,
	MuiAppBar: {
		styleOverrides: {
			root: {
				backgroundColor: "rgb(33, 33, 33)",
			},
		},
	},
	MuiCard: {
		styleOverrides: {
			root: {
				borderRadius: components.MuiCard.styleOverrides.root.borderRadius,
				backgroundColor: "rgb(48, 48, 48)",
			},
		},
	},
	MuiDialog: {
		styleOverrides: {
			paper: {
				borderRadius: components.MuiDialog.styleOverrides.paper.borderRadius,
				backgroundColor: "rgb(27, 27, 27)",
			},
		},
	},
	MuiIconButton: {
		styleOverrides: {
			root: {
				"&:hover": {
					backgroundColor: "rgba(255,255,255,0.25)",
				},
			},
		},
	},
	MuiMenu: {
		styleOverrides: {
			paper: {
				borderRadius: components.MuiMenu.styleOverrides.paper.borderRadius,
				backgroundColor: "rgba(38, 38, 38)",
			},
		},
	},
};

export const darkOptions = {
	cssVariables: true,
	palette: {
		mode: "dark" as PaletteMode,
		background: {
			default: "rgb(33, 33, 33)",
		},
		error: {
			main: "#f44336",
			dark: "#ff8583",
		},
	},
	components: componentsDark,
	typography,
};
export const lightOptions = {
	cssVariables: true,
	palette: {
		mode: "light" as PaletteMode,
	},
	components: componentsLight,
	typography,
};
