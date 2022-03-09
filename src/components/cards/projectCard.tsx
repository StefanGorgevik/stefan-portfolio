import { Card, CardContent, Typography, Fade } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProjectProps } from "../../types";
import { colors } from "../../constants";
import { Skill } from "../index";
interface ProjectCardProps {
  project: ProjectProps;
  i: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, i }) => {
  const [checked, setChecked] = useState(false);
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
        onClick={() => window.open(project.url)}
        sx={{
          backgroundColor: colors.secondary,
          width: "100%",
          borderRadius: 10,
          padding: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#ba9872",
            color: "#e6e2df",
          },
        }}
      >
        <CardContent>
          <Typography variant="h5" textAlign="center" paddingBottom="10px">
            {project.name}
          </Typography>
          <Typography textAlign="center">{project.info}</Typography>
        </CardContent>
        <div style={{ width: "100%" }}>
          <CardContent
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              alignItems: "flex-end",
              justifyItems: "center",
              rowGap: 1,
              width: "100%",
            }}
          >
            {project.skills.map((skill: any) => (
              <Skill skill={skill} key={skill} />
            ))}
          </CardContent>
        </div>
      </Card>
    </Fade>
  );
};
