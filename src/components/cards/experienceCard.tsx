import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { colors } from "../../constants";
import { ExperienceProps } from "~/types";
import { Skill } from "../index";
interface ExperienceCardProps {
  experience: ExperienceProps;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
}) => (
  <Card
    sx={{
      minWidth: "100%",
      width: "100%",
      background: colors.secondary,
      borderRadius: 10,
    }}
  >
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" textAlign="center">
        {experience.company}
      </Typography>
      <Typography variant="h6" textAlign="center">
        ({experience.position})
      </Typography>
      <Typography variant="body1">
        {experience.fromTo} ({experience.length})
      </Typography>
    </CardContent>
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
      {experience.skills.map((skill: string) => (
        <Skill skill={skill} key={skill} />
      ))}
    </CardContent>
  </Card>
);
