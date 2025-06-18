import DialogActions from "@/components/dialog/personalize/dialog-actions";
import DialogContent from "@/components/dialog/personalize/dialog-content/dialog-content";
import DialogTitle from "@/components/dialog/personalize/dialog-title";
import useStore from "@/hooks/use-store";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";

export default function Personalize() {
	const open = useStore((state) => state.personalizeDialogOpen);
	const setOpen = useStore((state) => state.setPersonalizeDialogOpen);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			slotProps={{
				paper: {
					component: "form",
					onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
						event.preventDefault();
						const formData = new FormData(event.currentTarget);
						const formJson = Object.fromEntries(formData.entries());
						const email = formJson.email;
						handleClose();
					},
				},
			}}
		>
			<DialogTitle />
			<Divider />
			<DialogContent />
			<DialogActions onCancelAction={handleClose} />
		</Dialog>
	);
}
