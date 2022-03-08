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
import { useScreenSize } from "../hooks";

export const Layout: React.FC = () => {
  const [tabValue, setTabValue] = useState<TabValues>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: TabValues) => {
    setTabValue(newValue);
  };

  const { matchesLG } = useScreenSize();

  const mainRef = useRef<HTMLInputElement>(null);
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

  useEffect(() => {
    const onScroll = () => {
      var top = window.pageYOffset;
      console.log("SCROLLING", top, projectsRef);
      // if (top > 749 && top < 1680) {
      //   console.log("in", projectsRef?.current?.offsetTop);
      //   return setTabValue(1);
      // }
      // if (top > 1680 && top < 2316) {
      //   console.log("ENTERED", skillsRef.current?.offsetTop);
      //   return setTabValue(2);
      // }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <div
          style={{
            width: matchesLG ? "95%" : "85%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            rowGap: "100px",
          }}
          ref={mainRef}
        >
          <div ref={projectsRef}>
            <Projects ref={projectsRef} />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={experienceRef} style={{ width: "100%" }}>
            <Experience />
          </div>
          <div ref={educationRef} style={{ width: "100%" }}>
            <Education />
          </div>
          <div ref={certificationRef} style={{ width: "100%" }}>
            <Certification />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
