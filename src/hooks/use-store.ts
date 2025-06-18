import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

type StoreState = {
	drawerOpen: boolean;
	newChatRequested: boolean;
	personalizeDialogOpen: boolean;
	settingsDialogOpen: boolean;
	snackbarMessage: string;
	snackbarOpen: boolean;
	streamedResponse: string[];
	setDrawerOpen: (next: ((prev: boolean) => boolean) | boolean) => void;
	setNewChatRequested: (next: ((prev: boolean) => boolean) | boolean) => void;
	setPersonalizeDialogOpen: (
		next: ((prev: boolean) => boolean) | boolean,
	) => void;
	setSettingsDialogOpen: (next: ((prev: boolean) => boolean) | boolean) => void;
	setSnackbarMessage: (next: ((prev: string) => string) | string) => void;
	setSnackbarOpen: (next: ((prev: boolean) => boolean) | boolean) => void;
	setStreamedResponse: (
		next: ((prev: string[]) => string[]) | string[],
	) => void;
};

type StoreData = Pick<
	StoreState,
	| "drawerOpen"
	| "newChatRequested"
	| "personalizeDialogOpen"
	| "settingsDialogOpen"
	| "snackbarMessage"
	| "snackbarOpen"
	| "streamedResponse"
>;
export type StoreActions = Pick<
	StoreState,
	| "setDrawerOpen"
	| "setNewChatRequested"
	| "setPersonalizeDialogOpen"
	| "setSettingsDialogOpen"
	| "setSnackbarMessage"
	| "setSnackbarOpen"
	| "setStreamedResponse"
>;

const developmentMode = process.env.NODE_ENV === "development";
const initialState = {
	drawerOpen: true,
	newChatRequested: false,
	personalizeDialogOpen: false,
	settingsDialogOpen: false,
	snackbarMessage: "",
	snackbarOpen: false,
	streamedResponse: [],
};

/**
 * Custom Zustand store for managing UI state
 */
const useStore = create(
	devtools(
		combine<StoreData, StoreActions>(initialState, (set) => ({
			setDrawerOpen: (next) => {
				set((state) => ({
					drawerOpen:
						typeof next === "function" ? next(state.drawerOpen) : next,
				}));
			},
			setNewChatRequested: (next) => {
				set((state) => ({
					newChatRequested:
						typeof next === "function" ? next(state.newChatRequested) : next,
				}));
			},
			setPersonalizeDialogOpen: (next) => {
				set((state) => ({
					personalizeDialogOpen:
						typeof next === "function"
							? next(state.personalizeDialogOpen)
							: next,
				}));
			},
			setSettingsDialogOpen: (next) => {
				set((state) => ({
					settingsDialogOpen:
						typeof next === "function" ? next(state.settingsDialogOpen) : next,
				}));
			},
			setSnackbarMessage: (next) => {
				set((state) => ({
					snackbarMessage:
						typeof next === "function" ? next(state.snackbarMessage) : next,
				}));
			},
			setSnackbarOpen: (next) => {
				set((state) => ({
					snackbarOpen:
						typeof next === "function" ? next(state.snackbarOpen) : next,
				}));
			},
			setStreamedResponse: (next) => {
				set((state) => ({
					streamedResponse:
						typeof next === "function" ? next(state.streamedResponse) : next,
				}));
			},
		})),
		{ enabled: developmentMode, name: "cfaChatbotStore" },
	),
);

// When you're done with the store, devtools needs you to clean it up
useStore.devtools.cleanup();

export default useStore;
