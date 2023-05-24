import { Link, useLocation } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { outlinedBtn, containedBtn } from "shared/commonStyles";

export const AlertDialog = ({
  children,
  isOpen,
  onClick,
  heroId,
  handleClose,
}) => {
  const location = useLocation();
  const backLink = location.state?.from ?? "/";

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" sx={{ fontSize: "24px" }}>
        {children}
      </DialogTitle>

      <DialogActions>
        <Button
          variant="contained"
          onClick={handleClose}
          sx={{ ...containedBtn, boxShadow: "none" }}
        >
          Cancel
        </Button>

        <Button
          component={Link}
          to={backLink}
          onClick={() => onClick(heroId)}
          variant="outlined"
          autoFocus
          sx={{
            ...outlinedBtn,
            ml: "8px",
            color: "primary.accent",
            borderColor: "primary.accent",
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
