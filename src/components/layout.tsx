import React, { useCallback, useEffect, useRef, useState } from "react";

import { Grid } from "@mui/material";
import { colors } from "../constants/colors";
import {
  Landing,
  Projects,
  Education,
  Certification,
  Experience,
  Skills,
  Header,
} from "./";

import { animateScroll as scroll } from "react-scroll";
import { TabValues } from "../types/componentTypes";

export const Layout: React.FC = () => {
  const [tabValue, setTabValue] = useState<TabValues>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: TabValues) => {
    setTabValue(newValue);
  };

  const projectsRef = useRef<HTMLInputElement>(null);
  const skillsRef = useRef<HTMLInputElement>(null);
  const experienceRef = useRef<HTMLInputElement>(null);
  const educationRef = useRef<HTMLInputElement>(null);
  const certificationRef = useRef<HTMLInputElement>(null);

  const scrollToSection = useCallback(
    (tabValue) => {
      console.log(projectsRef);
      let offset: number = 0;
      if (tabValue === 1 && projectsRef && projectsRef.current) {
        offset = projectsRef?.current?.offsetTop;
      } else if (tabValue === 2 && skillsRef && skillsRef.current) {
        offset = skillsRef?.current?.offsetTop;
      } else if (tabValue === 3 && experienceRef && experienceRef.current) {
        offset = experienceRef?.current?.offsetTop;
      } else if (tabValue === 4 && educationRef && educationRef.current) {
        offset = educationRef?.current?.offsetTop;
      } else if (
        tabValue === 5 &&
        certificationRef &&
        certificationRef.current
      ) {
        offset = certificationRef?.current?.offsetTop;
      }
      scroll.scrollTo(offset - 70);
    },
    [projectsRef, skillsRef]
  );

  useEffect(() => {
    scrollToSection(tabValue);
  }, [tabValue, scrollToSection]);

  return (
    <Grid
      container
      flexDirection="column"
      sx={{ backgroundColor: colors.secondary, height: "100%" }}
    >
      <Header tabValue={tabValue} onTabChange={handleChange} />
      <Grid
        item
        container
        sx={{ marginTop: "70px", height: "100%", flexDirection: "column" }}
      >
        <Landing />
        <div ref={projectsRef}>
          <Projects ref={projectsRef} />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={certificationRef}>
          <Certification />
        </div>
      </Grid>
    </Grid>
  );
};
