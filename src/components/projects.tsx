import React from "react";
import { Grid } from "@mui/material";
import { projects } from "../data/projects";
import { FadeInView, SectionContainer, ProjectCard } from "./index";

export const Projects: React.FC<{ checkItem: boolean }> = ({ checkItem }) => {
  return (
    <FadeInView checkItem={checkItem}>
      <SectionContainer label="Projects">
        <Grid
          item
          container
          sx={{
            width: "100%",
            margin: "0 auto",
            marginTop: "20px",
            marginBottom: "20px",
            borderRadius: 10,
            gap: 1,
          }}
          justifyContent="space-evenly"
          alignItems="center"
        >
          {projects.map((proj) => (
            <Grid item md={3.5} key={proj.id}>
              <ProjectCard project={proj} i={proj.id} />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </FadeInView>
  );
};
