import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from '@mui/material';

export const ModalSettings = (props: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
}) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle>
        <Typography variant="h4">
          Lorem ipsum dolor sit amet consectetuer
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">
          Are you sure you want to delete this user?
        </Typography>
        <Typography variant="subtitle2">
          You can't undo this operation
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => props.setOpen(false)}>
          Save changes
        </Button>
        <Button
          variant="contained"
          onClick={() => props.setOpen(false)}
          color="error"
        >
          Exit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
