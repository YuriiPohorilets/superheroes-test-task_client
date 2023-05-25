import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { App } from "./App";
import { HeroesProvider } from "hooks/heroesContext";
import { theme } from "theme";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/superheroes-test-task_client/">
        <HeroesProvider>
          <App />
        </HeroesProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
