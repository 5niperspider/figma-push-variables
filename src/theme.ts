import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      light: "#7986cb",
      main: "#3f51b5",
      dark: "#303f9f",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
      contrastText: "#fff",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(0, 0, 0, 0.14)",
      selectedOpacity: 0.14,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },

  typography: {
    fontFamily:
      "Inter",
    fontSize: 14,
  },
});

export default theme;