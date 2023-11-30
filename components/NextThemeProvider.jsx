"use client";
import { ThemeProvider } from "next-themes";

const NextThemeProvider = ({ children }) => {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
};

export default NextThemeProvider;
