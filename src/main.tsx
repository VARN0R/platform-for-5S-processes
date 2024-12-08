import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.tsx";
import { GlobalStyles } from "./styles/global-styles.ts";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./styles/myTheme.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={myTheme}>
    <GlobalStyles />

    <App />
  </ThemeProvider>
);
