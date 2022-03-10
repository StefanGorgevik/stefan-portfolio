import React, { useEffect, useRef, useState } from "react";

import { Grid } from "@mui/material";
import { Home, Projects, Education, Experience, Skills, Header } from "./";

import { animateScroll as scroll } from "react-scroll";
import { TabValues } from "../types/componentTypes";
import { useScreenSize } from "../hooks";
import { useOnScreen } from "../hooks";
import { tabs } from "./header";
import { colors } from "../constants";

export const Layout: React.FC = () => {
  const [tabValue, setTabValue] = useState<TabValues>(0);
  const [tabName, setTabName] = useState("Home");
  const [shouldScroll, setShouldScroll] = useState(true);

  const { matchesLG } = useScreenSize();

  const mainRef = useRef<HTMLInputElement>(null);
  const homeRef = useRef<HTMLInputElement>(null);
  const projectsRef = useRef<HTMLInputElement>(null);
  const skillsRef = useRef<HTMLInputElement>(null);
  const experienceRef = useRef<HTMLInputElement>(null);
  const isHomeVisible = useOnScreen(homeRef);
  const isProjectsVisible = useOnScreen(projectsRef);
  const isSkillsVisible = useOnScreen(skillsRef);
  const isExperienceVisible = useOnScreen(experienceRef);

  const handleChange = (event: React.SyntheticEvent, newValue: TabValues) => {
    setShouldScroll(true);
    setTabValue(newValue);
    setTabName(tabs[newValue]);
  };

  useEffect(() => {
    if (isProjectsVisible && !isHomeVisible) {
      setShouldScroll(false);
      setTabName("Projects");
      setTabValue(1);
    } else if (isSkillsVisible && !isProjectsVisible) {
      setShouldScroll(false);
      setTabName("Skills");
      setTabValue(2);
    } else if (isExperienceVisible && !isSkillsVisible) {
      setShouldScroll(false);
      setTabName("Experience/Education");
      setTabValue(3);
    } else if (isHomeVisible && isProjectsVisible) {
      setShouldScroll(false);
      setTabName("Home");
      setTabValue(0);
    }
  }, [
    isProjectsVisible,
    isSkillsVisible,
    isExperienceVisible,
    isHomeVisible,
    tabValue,
  ]);

  useEffect(() => {
    let offset: number = 0;
    if (tabValue === 1 && projectsRef && projectsRef.current) {
      offset = projectsRef?.current?.offsetTop;
    } else if (tabValue === 2 && skillsRef && skillsRef.current) {
      offset = skillsRef?.current?.offsetTop;
    } else if (tabValue === 3 && experienceRef && experienceRef.current) {
      offset = experienceRef?.current?.offsetTop;
    } else if (tabValue === 0 && homeRef && homeRef.current) {
      offset = homeRef?.current?.offsetTop;
    }
    if (shouldScroll) {
      scroll.scrollTo(offset - 70);
    }
  }, [tabValue, projectsRef, skillsRef, experienceRef, homeRef, shouldScroll]);

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
      <Grid container sx={{ marginTop: "70px", flexDirection: "column" }}>
        <div
          style={{
            width: matchesLG ? "95%" : "80%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            rowGap: "100px",
          }}
          ref={mainRef}
        >
          <div ref={homeRef}>
            <Home checkItem={isHomeVisible} />
          </div>

          <div ref={projectsRef}>
            <Projects checkItem={isProjectsVisible} />
          </div>
          <div ref={skillsRef}>
            <Skills checkItem={isSkillsVisible} />
          </div>
          <div
            ref={experienceRef}
            style={{
              width: "100%",
              display: "flex",
              rowGap: "100px",
              flexDirection: "column",
            }}
          >
            <Experience checkItem={isExperienceVisible} />
            <Education />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
