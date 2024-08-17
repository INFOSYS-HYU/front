import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utils/scrollTop.tsx";
import { AuthProvider } from "./services/AuthProvider.tsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <RecoilRoot>
            <ScrollToTop />
            <App />
          </RecoilRoot>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
    ,
  </ThemeProvider>
);
