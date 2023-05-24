import { Box, Typography } from "@mui/material";
import { GoBackButton } from "components/GoBackButton/GoBackButton";

export const ErrorMsg = () => {
  return (
    <Box>
      <GoBackButton />
      <Typography sx={{ mt: "24px", fontSize: "36px" }}>
        Oops! Something went wrong.
      </Typography>
    </Box>
  );
};
