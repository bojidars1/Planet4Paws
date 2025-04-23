import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#173acd",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#333333",
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#173acd",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
  },
});