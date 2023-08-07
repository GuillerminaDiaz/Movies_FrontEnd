import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  BG = "#0D152B",
  LBLUE = "#32B4FF",
  FONT_GLOBAL = "'JetBrains Mono', monospace",
  NAVBAR = "#0D152B",
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: themePalette.BG,
    },
    primary: {
      main: themePalette.LBLUE,
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0.5em",
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
