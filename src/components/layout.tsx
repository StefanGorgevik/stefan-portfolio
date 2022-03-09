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
  const [showProjects, setShowProjects] = useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: TabValues) => {
    if (newValue === 1) {
      setShowProjects(true);
    }
    setTabValue(newValue);
    setTabName(tabs[newValue]);
  };

  const { matchesLG } = useScreenSize();

  const mainRef = useRef<HTMLInputElement>(null);
  const homeRef = useRef<HTMLInputElement>(null);
  const projectsRef = useRef<HTMLInputElement>(null);
  const skillsRef = useRef<HTMLInputElement>(null);
  const experienceRef = useRef<HTMLInputElement>(null);
  const educationRef = useRef<HTMLInputElement>(null);
  const isHomeVisible = useOnScreen(homeRef);
  const isProjectsVisible = useOnScreen(projectsRef);
  const isSkillsVisible = useOnScreen(skillsRef);
  const isExperienceVisible = useOnScreen(experienceRef);
  const isEducationVisible = useOnScreen(educationRef);

  useEffect(() => {
    if (isProjectsVisible) {
      if (projectsRef.current && skillsRef.current) {
        const closest = getClosest(
          projectsRef.current.offsetTop,
          skillsRef.current.offsetTop
        );
        if (closest === projectsRef.current.offsetTop) {
          setTabName("Projects");
          setShowProjects(true);
        }
      }
    } else if (isSkillsVisible) {
      if (skillsRef.current && experienceRef.current) {
        const closest = getClosest(
          skillsRef.current.offsetTop,
          experienceRef.current.offsetTop
        );
        if (closest === skillsRef.current.offsetTop) {
          setTabName("Skills");
        }
      }
    } else if (isExperienceVisible && isEducationVisible) {
      if (educationRef.current && experienceRef.current) {
        const closest = getClosest(
          educationRef.current.offsetTop,
          experienceRef.current.offsetTop
        );
        if (closest === experienceRef.current.offsetTop) {
          setTabName("Experience");
        }
      }
    } else if (isEducationVisible && !isExperienceVisible) {
      if (
        educationRef &&
        educationRef.current &&
        experienceRef &&
        experienceRef.current
      ) {
        let closest = getClosest(
          educationRef.current.offsetTop,
          experienceRef.current.offsetTop
        );
        if (closest === educationRef.current.offsetTop) {
          setTabName("Education");
        }
      }
    } else if (isHomeVisible) {
      if (homeRef && homeRef.current && projectsRef && projectsRef.current) {
        let closest = getClosest(
          homeRef.current.offsetTop,
          projectsRef.current.offsetTop
        );
        if (closest === homeRef.current.offsetTop) {
          setTabName("Home");
          setShowProjects(false);
        }
      }
    }
  }, [
    isProjectsVisible,
    isSkillsVisible,
    isExperienceVisible,
    isEducationVisible,
    isHomeVisible,
    tabValue,
  ]);

  useEffect(() => {
    let offset: number = 0;
    if (tabValue === 1 && projectsRef && projectsRef.current) {
      setShowProjects(true);
      offset = projectsRef?.current?.offsetTop;
    } else if (tabValue === 2 && skillsRef && skillsRef.current) {
      offset = skillsRef?.current?.offsetTop;
    } else if (tabValue === 3 && experienceRef && experienceRef.current) {
      offset = experienceRef?.current?.offsetTop;
    } else if (tabValue === 4 && educationRef && educationRef.current) {
      offset = educationRef?.current?.offsetTop;
    } else if (tabValue === 0 && homeRef && homeRef.current) {
      offset = homeRef?.current?.offsetTop;
    }
    scroll.scrollTo(offset - 70);
  }, [tabValue, projectsRef, skillsRef, experienceRef, educationRef, homeRef]);

  useEffect(() => {
    if (isHomeVisible && isProjectsVisible && window.pageYOffset < 300) {
      setTabName("Home");
      setShowProjects(false);
    } else if (isHomeVisible && isProjectsVisible && window.pageYOffset > 300) {
      setShowProjects(true);
    }
  }, [isHomeVisible, isProjectsVisible]);

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
            width: matchesLG ? "95%" : "85%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            rowGap: "100px",
            paddingBottom: "50px",
          }}
          ref={mainRef}
        >
          <div ref={homeRef}>
            <Home checkItem={isHomeVisible} />
          </div>

          <div ref={projectsRef}>
            <Projects checkItem={isProjectsVisible && showProjects} />
          </div>
          <div ref={skillsRef}>
            <Skills checkItem={isSkillsVisible} />
          </div>
          <div ref={experienceRef} style={{ width: "100%" }}>
            <Experience checkItem={isExperienceVisible} />
          </div>
          <div ref={educationRef} style={{ width: "100%" }}>
            <Education checkItem={isEducationVisible} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
