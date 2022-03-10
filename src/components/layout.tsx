import React, { useEffect, useRef, useState } from "react";

import { Grid } from "@mui/material";
import { Home, Projects, Education, Experience, Skills, Header } from "./";

import { animateScroll as scroll } from "react-scroll";
import { TabValues } from "../types/componentTypes";
import { useScreenSize } from "../hooks";
import { useOnScreen } from "../hooks";
import { tabs } from "./header";
import { colors } from "../constants";

const getClosest = (off1: number, off2: number) => {
  let top = window.pageYOffset;
  let arr: number[] = [off1, off2];

  return arr.reduce(function (prev, curr) {
    return Math.abs(curr - top) < Math.abs(prev - top) ? curr : prev;
  });
};

export const Layout: React.FC = () => {
  const [tabValue, setTabValue] = useState<TabValues>(0);
  const [tabName, setTabName] = useState("Home");

  const { matchesLG } = useScreenSize();

  const handleChange = (event: React.SyntheticEvent, newValue: TabValues) => {
    setTabValue(newValue);
    setTabName(tabs[newValue]);
  };

  return (
    <Grid
      container
      flexDirection="column"
      sx={{ height: "100%", backgroundColor: colors.primary }}
    >
      <Header
        tabValue={tabValue}
        onTabChange={handleChange}
        tabName={tabName}
      />
      <Grid
        container
        sx={{
          marginTop: "70px",
          width: matchesLG ? "95%" : "80%",
          margin: "0 auto",
          height: "100vh",
        }}
      >
        {/* <div
          style={{
            width: matchesLG ? "95%" : "80%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        > */}
        {tabValue === 0 && <Home checkItem={tabValue === 0} />}
        {tabValue === 1 && <Projects checkItem={tabValue === 1} />}
        {tabValue === 2 && <Skills checkItem={tabValue === 2} />}
        {tabValue === 3 && <Experience checkItem={tabValue === 3} />}
        {tabValue === 4 && <Education checkItem={tabValue === 4} />}
      </Grid>
    </Grid>
  );
};
