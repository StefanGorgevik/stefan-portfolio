import { Grid, Typography } from "@mui/material";
import React from "react";
import { map } from "lodash-es";
import { ProjectProps, projects } from "../data/projects";
import { ProjectCard } from "../components/cards/projectCard";
export const Projects: React.FC = () => {
  return (
    <Grid container>
      <Typography>Projects</Typography>
      <Grid item container>
        {map(projects, (project: ProjectProps) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </Grid>
  );
};
