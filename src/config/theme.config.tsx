import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  BG = "#0D152B",
  LBLUE = "#32B4FF",
  FONT_GLOBAL = "'JetBrains Mono', monospace",
  NAVBAR = "rgba(23, 38, 78, 0.6)",
  //Alert Styles
  ERROR_MAIN = "rgb(122, 29, 20)",
  BG_ERROR_MAIN = "rgba(174, 21, 5, 0.4)",
  SUCCESS_MAIN = "rgb(19, 111, 18)",
  BG_SECCESS_MAIN = "rgba(26, 126, 25, 0.4)",
  CARD = "rgba(23, 38, 78, 0.6)",
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
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: "0.8em",
          fontSize: "1em",
        },
      },
      //Apuntar a estilos de un tipo de componente
      styleOverrides: {
        standardError: {
          border: `1px solid ${themePalette.ERROR_MAIN}`,
          background: themePalette.BG_ERROR_MAIN,
        },
        standardSuccess: {
          border: `1px solid ${themePalette.SUCCESS_MAIN}`,
          background: themePalette.BG_SECCESS_MAIN,
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
