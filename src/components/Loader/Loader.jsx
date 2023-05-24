import { Box, LinearProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Box sx={{ width: "100%", my: "18px" }}>
      <LinearProgress />
    </Box>
  );
};
