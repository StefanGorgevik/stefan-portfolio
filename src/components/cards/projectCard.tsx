import {
  Button,
  Card,
  useTheme,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { ProjectProps } from "../../data/projects";

interface ProjectCardProps {
  project: ProjectProps;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.primary.main,
        width: "50%",
        height: 400,
      }}
    >
      <CardContent>
        <Typography>{project.name}</Typography>
        <Typography>{project.info}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">See project</Button>
      </CardActions>
    </Card>
  );
};
