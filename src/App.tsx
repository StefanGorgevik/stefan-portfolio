import React, { lazy, Suspense, useContext, useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Header } from "./components/header";
// import { Loading } from "./components";
import {Projects, PersonalInfo, EducationExperience, TechnicalSkills} from './routes'
// import { useMode } from "./utils";

import CircularProgress from "@mui/material/CircularProgress";
const App = () => {
  const theme: any = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#89ABE3FF", //skyblue
            light: "#FCF6F5FF", //white
            contrastText: "#FCF6F5FF",
          },
        },
        typography: {
          fontSize: 18,
          fontFamily: `"Noto Sans", "serif"`,
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
      <BrowserRouter>
        <Header />
        <Suspense fallback={<CircularProgress color='primary' />}>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/technical-skills" element={<TechnicalSkills />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/education-and-experience"
            element={<EducationExperience />}
          />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
