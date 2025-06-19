import { create } from "zustand";
import { combine } from "zustand/middleware";

type StoreState = {
	drawerOpen: boolean;
	newChatRequested: boolean;
	personalizeDialogOpen: boolean;
	settingsDialogOpen: boolean;
	snackbarMessage: string;
	snackbarOpen: boolean;
	streamedResponse: string[];
	setDrawerOpen: (open: ((prev: boolean) => boolean) | boolean) => void;
	setNewChatRequested: (
		requested: ((prev: boolean) => boolean) | boolean,
	) => void;
	setPersonalizeDialogOpen: (
		open: ((prev: boolean) => boolean) | boolean,
	) => void;
	setSettingsDialogOpen: (open: ((prev: boolean) => boolean) | boolean) => void;
	setSnackbarMessage: (message: ((prev: string) => string) | string) => void;
	setSnackbarOpen: (open: ((prev: boolean) => boolean) | boolean) => void;
	setStreamedResponse: (
		response: ((prev: string[]) => string[]) | string[],
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
type StoreActions = Pick<
	StoreState,
	| "setDrawerOpen"
	| "setNewChatRequested"
	| "setPersonalizeDialogOpen"
	| "setSettingsDialogOpen"
	| "setSnackbarMessage"
	| "setSnackbarOpen"
	| "setStreamedResponse"
>;

const initialState = {
	drawerOpen: true,
	newChatRequested: false,
	personalizeDialogOpen: false,
	settingsDialogOpen: false,
	snackbarMessage: "",
	snackbarOpen: false,
	streamedResponse: [],
};

export type Store = StoreData & StoreActions;

const stateCreator = combine<StoreData, StoreActions>(initialState, (set) => ({
	setDrawerOpen: (next) => {
		set((state) => ({
			drawerOpen: typeof next === "function" ? next(state.drawerOpen) : next,
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
				typeof next === "function" ? next(state.personalizeDialogOpen) : next,
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
}));

export default create(stateCreator);
