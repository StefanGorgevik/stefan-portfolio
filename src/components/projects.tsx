import React, { useEffect, useState } from "react";
import { Grid, Fade } from "@mui/material";
import { colors } from "../constants";
import { projects } from "../data/projects";
import { ProjectCard } from "./cards/projectCard";
import { SectionTitle } from "./ui/sectionTitle";

export const Projects: React.FC<{ ref: any }> = ({ ref }) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 250);
  }, []);
  return (
    <Fade in={checked} ref={ref}>
      <Grid item container>
        <SectionTitle label="Projects" />
        <Grid
          item
          container
          sx={{
            width: "90%",
            margin: "0 auto",
            background: colors.secondary,
            marginTop: "20px",
            marginBottom: "20px",
            borderRadius: 10,
            gap: 1,
          }}
          justifyContent="space-evenly"
          alignItems="center"
        >
          {projects.map((proj) => (
            <Grid item md={3} key={proj.id}>
              <ProjectCard project={proj} i={proj.id} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Fade>
  );
};
