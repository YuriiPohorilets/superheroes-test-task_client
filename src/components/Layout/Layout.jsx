import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { AppBar } from "components/AppBar/AppBar";
import { Wrapper } from "components/Wrapper/Wrapper";
import { Container } from "components/Container/Container";

export const Layout = () => {
  return (
    <>
      <AppBar />

      <Box component="main">
        <Wrapper>
          <Container>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Container>
        </Wrapper>
      </Box>
    </>
  );
};
