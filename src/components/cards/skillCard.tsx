import React from "react";
import { Card, CardContent, Typography, Icon } from "@mui/material";
import { colors } from "../../constants";
import { SkillProps } from "~/types";

interface SkillCardProps {
  skill: SkillProps;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
  <Card
    sx={{
      minWidth: "200px",
      width: "200px",
      height: "200px",
      background: colors.primary,
      borderRadius: 10,
    }}
  >
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">{skill.skill}</Typography>
      {/* <Icon fontSize="large">{icon}</Icon> */}
      {skill.image && (
        <img
          src={skill.image}
          alt="skill"
          style={{ width: 115, height: 115 }}
        />
      )}
    </CardContent>
  </Card>
);
