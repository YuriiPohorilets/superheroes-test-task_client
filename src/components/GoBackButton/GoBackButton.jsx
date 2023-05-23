import { useLocation, Link } from "react-router-dom";
import { Button } from "@mui/material";
import { outlinedBtn } from "shared/commonStyles";

export const GoBackButton = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? "/";

  return (
    <Button
      component={Link}
      type="button"
      variant="outlined"
      to={backLink}
      sx={outlinedBtn}
    >
      Go back
    </Button>
  );
};
