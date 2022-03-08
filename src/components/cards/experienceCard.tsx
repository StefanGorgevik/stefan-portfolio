import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { colors } from "../../constants";
import { ExperienceProps } from "~/types";

interface ExperienceCardProps {
  experience: ExperienceProps;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
}) => (
  <Card
    sx={{
      minWidth: "300px",
      width: "100%",
      height: "260px",
      background: colors.primary,
      borderRadius: 10,
      paddingBottom: 10,
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
        alignItems: "center",
        justifyItems: "center",
        rowGap: 1,
        width: "100%",
      }}
    >
      {experience.skills.map((skill: string) => (
        <Typography
          variant="h6"
          sx={{
            backgroundColor: colors.secondary,
            width: "150px",
            borderRadius: 10,
          }}
          textAlign="center"
        >
          {skill}
        </Typography>
      ))}
    </CardContent>
  </Card>
);
