import { AppBar as MuiAppBar, Box } from "@mui/material";
import { Container } from "components/Container/Container";
import { NavBar } from "components/NavBar/NavBar";
import { CreateHero } from "components/CreateHero/CreateHero";
import { header, wrapper } from "./appBarStyles";

export const AppBar = () => {
  return (
    <MuiAppBar position="static" sx={header}>
      <Container>
        <Box sx={wrapper}>
          <NavBar />

          <CreateHero />
        </Box>
      </Container>
    </MuiAppBar>
  );
};
