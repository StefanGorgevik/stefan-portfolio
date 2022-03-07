import React from "react";
import { Card, CardContent, Typography, Icon } from "@mui/material";
import { colors } from "../../constants";
import JavascriptIcon from "@mui/icons-material/Javascript";

interface SkillCardProps {
  skill: string;
  icon: any;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, icon }) => (
  <Card
    sx={{
      minWidth: "300px",
      width: "300px",
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
      <Typography variant="body1">{skill}</Typography>
      <Icon fontSize="large">{icon}</Icon>
    </CardContent>
  </Card>
);
