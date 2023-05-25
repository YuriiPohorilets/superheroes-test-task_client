import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { AppBar } from "components/AppBar/AppBar";
import { Container } from "components/Container/Container";

export const Layout = () => {
  return (
    <>
      <AppBar />

      <Box component="main">
        <Box component="section" sx={{ py: "60px" }}>
          <Container>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Container>
        </Box>
      </Box>
    </>
  );
};
