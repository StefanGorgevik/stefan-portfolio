import React from "react";
import { Card, CardContent, Typography, Icon } from "@mui/material";
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
      minWidth: "500px  ",
      width: "100%",
      height: "200px",
      background: colors.primary,
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
      <Typography variant="body1">
        {experience.company} ({experience.position})
      </Typography>
      <Typography variant="body1">
        Period: {experience.fromTo} ({experience.length})
      </Typography>
      <Typography variant="body1">
        Skills: {JSON.stringify(experience.skills)}{" "}
      </Typography>

      {/* <Icon fontSize="large">{icon}</Icon> */}
    </CardContent>
  </Card>
);
