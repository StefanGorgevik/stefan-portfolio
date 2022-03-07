import React from "react";
import { Grid } from "@mui/material";
import { colors } from "../constants";
import { projects } from "../data/projects";
import { ProjectCard } from "./cards/projectCard";

export const Projects: React.FC = () => {
  return (
    <Grid
      item
      container
      sx={{
        width: "90%",
        height: "85vh",
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
  );
};
