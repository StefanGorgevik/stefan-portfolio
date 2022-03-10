import React from "react";
import { Grid } from "@mui/material";
import { projects } from "../data/projects";
import { FadeInView, SectionContainer, ProjectCard } from "./index";
import { useScreenSize } from "../hooks";

export const Projects: React.FC<{ checkItem: boolean }> = ({ checkItem }) => {
  const { matchesLG } = useScreenSize();
  return (
    <FadeInView checkItem={checkItem}>
      <SectionContainer label="Projects">
        <Grid
          item
          container
          sx={{
            margin: "0 auto",
            borderRadius: 10,
            gap: 1,
          }}
          justifyContent={matchesLG ? "center" : "space-between"}
          alignItems="center"
        >
          {projects.map((proj) => (
            <Grid item md={matchesLG ? 6 : 3.5} key={proj.id}>
              <ProjectCard project={proj} i={proj.id} />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </FadeInView>
  );
};
