import React from "react";
import { LangProvider } from "./src/context/langContext/langContext";
import { ThemeProvider } from "./src/context/themeContext/themeProvider";

export const wrapRootElement = ({ element }) => (
  <LangProvider>
    <ThemeProvider>{element}</ThemeProvider>
  </LangProvider>
);
