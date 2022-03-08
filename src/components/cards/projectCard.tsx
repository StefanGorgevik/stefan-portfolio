import {
  Card,
  CardContent,
  Typography,
  Fade,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProjectProps } from "../../types";
import { colors } from "../../constants";

interface ProjectCardProps {
  project: ProjectProps;
  i: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, i }) => {
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    let time: number = 100;
    switch (i) {
      case 1:
        time = 110;
        break;
      case 2:
        time = 130;
        break;
      case 3:
        time = 140;
        break;
      case 4:
        time = 160;
        break;
      case 5:
        time = 170;
        break;
      case 6:
        time = 180;
        break;
      default:
        time = 0;
        break;
    }
    setTimeout(() => {
      setChecked(true);
    }, time);
  }, [i]);

  return (
    <Fade in={checked}>
      <Card
        sx={{
          backgroundColor: colors.primary,
          width: "100%",
          borderRadius: 10,
          padding: 1,
          minHeight: matchesMD ? 250 : 330,
          display: "flex",
          justifyContent: "space-around",
          cursor: "pointer",
          "&:hover": {
            // opacity: 0.7,
            backgroundColor: "#ba9872",
            color: "#e6e2df",
          },
          height: matchesMD ? "275px" : "400px",
        }}
      >
        <CardContent>
          <Typography variant="h5" textAlign="center" paddingBottom="10px">
            {project.name}
          </Typography>
          <Typography textAlign="center">{project.info}</Typography>
        </CardContent>
        {/* <CardActions>
        <Button variant="contained">See project</Button>
      </CardActions> */}
      </Card>
    </Fade>
  );
};
