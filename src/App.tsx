import React, { useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import { Grid } from "@mui/material";
import { Header } from "./components/header";
import { colors } from "./constants/colors";
import { Landing, Projects, Education } from "./components";
const App: React.FC = () => {
  const [tabValue, setTabValue] = useState<number>(1);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
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
      <Grid
        container
        flexDirection="column"
        sx={{ backgroundColor: colors.secondary, height: "100%" }}
      >
        <Header tabValue={tabValue} onTabChange={handleChange} />
        <Grid item container sx={{ marginTop: "70px", height: "100%" }}>
          {tabValue === 0 && <Landing />}
          {tabValue === 1 && <Projects />}
          {tabValue === 1 && <Education />}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
