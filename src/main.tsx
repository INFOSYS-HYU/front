import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utils/scrollTop.tsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <RecoilRoot>
          <ScrollToTop />
            <App />
        </RecoilRoot>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);
