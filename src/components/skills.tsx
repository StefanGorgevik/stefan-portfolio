import React from "react";
import { Grid } from "@mui/material";
import { skills } from "../data";
import { FadeInView, SectionContainer, SkillCard } from "./index";

export const Skills: React.FC<{ checkItem: boolean }> = ({ checkItem }) => {
  return (
    <FadeInView checkItem={checkItem}>
      <SectionContainer label="Skills">
        <Grid
          item
          container
          sx={{
            width: "95%",
            margin: "0 auto",
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
      </SectionContainer>
    </FadeInView>
  );
};
