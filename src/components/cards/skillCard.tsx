import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { colors } from "../../constants";
import { SkillProps } from "~/types";
import { useScreenSize } from "../../hooks";

interface SkillCardProps {
  skill: SkillProps;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { matchesSM } = useScreenSize();
  return (
    <Card
      sx={{
        width: matchesSM ? " 150px" : "200px",
        height: matchesSM ? " 150px" : "200px",
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
        {skill.image && (
          <img
            src={skill.image}
            alt="skill"
            style={{
              width: matchesSM ? 100 : 115,
              height: matchesSM ? 100 : 115,
            }}
          />
        )}
      </CardContent>
    </Card>
  );
};
