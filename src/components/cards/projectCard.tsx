import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { ProjectProps } from "../../data/projects";

interface ProjectCardProps {
    project: ProjectProps;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project
}) => {
  return (
    <Card>
      <CardContent>
        <Typography>{project.name}</Typography>
        <Typography>{project.info}</Typography>
      </CardContent>
      <CardActions>
          <Button variant='contained'>See project</Button>
      </CardActions>
    </Card>
  );
};
