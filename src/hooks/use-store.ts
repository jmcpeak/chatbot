import { create } from "zustand/index";
import { combine } from "zustand/middleware";

type StoreState = {
	drawerOpen: boolean;
	personalizeDialogOpen: boolean;
	settingsDialogOpen: boolean;
	snackbarMessage: string;
	snackbarOpen: boolean;
	setDrawerOpen: (nextOpen: ((prev: boolean) => boolean) | boolean) => void;
	setPersonalizeDialogOpen: (
		nextOpen: ((prev: boolean) => boolean) | boolean,
	) => void;
	setSettingsDialogOpen: (
		nextOpen: ((prev: boolean) => boolean) | boolean,
	) => void;
	setSnackbarMessage: (
		nextMessage: ((prev: string) => string) | string,
	) => void;
	setSnackbarOpen: (nextOpen: ((prev: boolean) => boolean) | boolean) => void;
};

type StoreData = Pick<
	StoreState,
	| "drawerOpen"
	| "personalizeDialogOpen"
	| "settingsDialogOpen"
	| "snackbarMessage"
	| "snackbarOpen"
>;
type StoreActions = Pick<
	StoreState,
	| "setDrawerOpen"
	| "setPersonalizeDialogOpen"
	| "setSettingsDialogOpen"
	| "setSnackbarMessage"
	| "setSnackbarOpen"
>;

/**
 * Custom Zustand store for managing UI state
 */
export default create(
	combine<StoreData, StoreActions>(
		{
			drawerOpen: true,
			personalizeDialogOpen: false,
			settingsDialogOpen: false,
			snackbarMessage: "",
			snackbarOpen: false,
		},
		(set) => ({
			setDrawerOpen: (nextOpen) => {
				set((state) => ({
					drawerOpen:
						typeof nextOpen === "function"
							? nextOpen(state.drawerOpen)
							: nextOpen,
				}));
			},
			setPersonalizeDialogOpen: (nextOpen) => {
				set((state) => ({
					personalizeDialogOpen:
						typeof nextOpen === "function"
							? nextOpen(state.personalizeDialogOpen)
							: nextOpen,
				}));
			},
			setSettingsDialogOpen: (nextOpen) => {
				set((state) => ({
					settingsDialogOpen:
						typeof nextOpen === "function"
							? nextOpen(state.settingsDialogOpen)
							: nextOpen,
				}));
			},
			setSnackbarMessage: (nextMessage) => {
				set((state) => ({
					snackbarMessage:
						typeof nextMessage === "function"
							? nextMessage(state.snackbarMessage)
							: nextMessage,
				}));
			},
			setSnackbarOpen: (nextOpen) => {
				set((state) => ({
					snackbarOpen:
						typeof nextOpen === "function"
							? nextOpen(state.snackbarOpen)
							: nextOpen,
				}));
			},
		}),
	),
);
