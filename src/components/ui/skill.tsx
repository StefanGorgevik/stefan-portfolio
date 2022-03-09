import { Typography } from "@mui/material";
import React from "react";
import { colors } from "../../constants";

interface SkillProps {
  skill: string;
}

export const Skill: React.FC<SkillProps> = ({ skill }) => {
  return (
    <Typography
      key={skill}
      variant="h6"
      sx={{
        backgroundColor: colors.primary,
        width: "90%",
        borderRadius: 10,
      }}
      textAlign="center"
    >
      {skill}
    </Typography>
  );
};
