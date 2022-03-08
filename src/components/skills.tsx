import React from "react";
import { Grid } from "@mui/material";
import { colors } from "../constants";
import { SectionTitle } from "./ui/sectionTitle";
import { SkillCard } from "./cards/skillCard";
import { skills } from "../data";
export const Skills: React.FC = () => {
  return (
    <Grid item container>
      <SectionTitle label="Skills" />
      <Grid
        item
        container
        sx={{
          width: "90%",
          background: colors.secondary,
          margin: "0 auto",
          marginTop: "20px",
          marginBottom: "20px",
          borderRadius: 10,
          gap: 1,
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        {skills.map((skill: any, i: number) => (
          <Grid
            item
            md={2}
            key={i}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <SkillCard skill={skill} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
