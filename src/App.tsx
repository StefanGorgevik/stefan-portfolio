import React, { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import { colors } from "./constants/colors";

import { Layout } from "./components/index";

const App: React.FC = () => {
  const theme: any = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: colors.primary,
            light: colors.secondary,
          },
          secondary: {
            main: colors.primary,
            light: colors.secondary,
          },
        },
        typography: {
          fontSize: 18,
          fontFamily: `"Share Tech", "serif"`,
          overline: {
            fontSize: "2rem",
            fontWeight: "bold",
            opacity: 0.7,
          },
          subtitle1: {
            fontSize: "1.2rem",
            fontWeight: "bold",
            textTransform: "uppercase",
          },
        },
        shape: {
          borderRadius: 2,
        },
      }),
    []
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
