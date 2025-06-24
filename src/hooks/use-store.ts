import { create } from "zustand";
import { combine } from "zustand/middleware";

type StoreState = {
	dialogDeleteChatId: string;
	dialogDeleteChatOpen: boolean;
	dialogPersonalizeOpen: boolean;
	drawerOpen: boolean;
	newChatRequested: boolean;
	prompt: string;
	promptMutator: (params: string) => void;
	promptSubmitColor: "primary" | "error";
	settingsDialogOpen: boolean;
	snackbarMessage: string;
	snackbarOpen: boolean;
	streamedResponse: string[];

	setDialogDeleteChatId: (id: ((prev: string) => string) | string) => void;
	setDialogDeleteChatOpen: (
		open: ((prev: boolean) => boolean) | boolean,
	) => void;
	setDialogPersonalizeOpen: (
		open: ((prev: boolean) => boolean) | boolean,
	) => void;
	setDrawerOpen: (open: ((prev: boolean) => boolean) | boolean) => void;
	setNewChatRequested: (
		requested: ((prev: boolean) => boolean) | boolean,
	) => void;
	setSettingsDialogOpen: (open: ((prev: boolean) => boolean) | boolean) => void;
	setSnackbarMessage: (message: ((prev: string) => string) | string) => void;
	setPrompt: (prompt: ((prev: string) => string) | string) => void;
	setPromptMutator: (next: (params: string) => void) => void;
	setPromptSubmitColor: (
		color:
			| ((prev: "primary" | "error") => "primary" | "error")
			| "primary"
			| "error",
	) => void;
	setSnackbarOpen: (open: ((prev: boolean) => boolean) | boolean) => void;
	setStreamedResponse: (
		response: ((prev: string[]) => string[]) | string[],
	) => void;
};

type StoreData = Pick<
	StoreState,
	| "dialogDeleteChatId"
	| "dialogDeleteChatOpen"
	| "dialogPersonalizeOpen"
	| "drawerOpen"
	| "newChatRequested"
	| "prompt"
	| "promptMutator"
	| "promptSubmitColor"
	| "settingsDialogOpen"
	| "snackbarMessage"
	| "snackbarOpen"
	| "streamedResponse"
>;
export type StoreActions = Pick<
	StoreState,
	| "setDialogDeleteChatId"
	| "setDialogDeleteChatOpen"
	| "setDialogPersonalizeOpen"
	| "setDrawerOpen"
	| "setNewChatRequested"
	| "setPrompt"
	| "setPromptMutator"
	| "setPromptSubmitColor"
	| "setSettingsDialogOpen"
	| "setSnackbarMessage"
	| "setSnackbarOpen"
	| "setStreamedResponse"
>;

const initialState = {
	dialogDeleteChatId: "",
	dialogDeleteChatOpen: false,
	dialogPersonalizeOpen: false,
	drawerOpen: true,
	newChatRequested: false,
	prompt: "",
	promptMutator: () => {},
	promptSubmitColor: "primary" as const,
	settingsDialogOpen: false,
	snackbarMessage: "",
	snackbarOpen: false,
	streamedResponse: [],
};

export type Store = StoreData & StoreActions;

const stateCreator = combine<StoreData, StoreActions>(initialState, (set) => ({
	setDialogDeleteChatId: (next) => {
		set((state) => ({
			dialogDeleteChatId:
				typeof next === "function" ? next(state.dialogDeleteChatId) : next,
		}));
	},
	setDialogDeleteChatOpen: (next) => {
		set((state) => ({
			dialogDeleteChatOpen:
				typeof next === "function" ? next(state.dialogDeleteChatOpen) : next,
		}));
	},
	setDialogPersonalizeOpen: (next) => {
		set((state) => ({
			dialogPersonalizeOpen:
				typeof next === "function" ? next(state.dialogPersonalizeOpen) : next,
		}));
	},
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
	setPrompt: (next) => {
		set((state) => ({
			prompt: typeof next === "function" ? next(state.prompt) : next,
		}));
	},
	setPromptMutator: (next: (params: string) => void) => {
		set(() => ({
			promptMutator: next,
		}));
	},
	setPromptSubmitColor: (next) => {
		set((state) => ({
			promptSubmitColor:
				typeof next === "function" ? next(state.promptSubmitColor) : next,
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
