import React from "react";
import { Grid } from "@mui/material";
import { skills } from "../data";
import { FadeInView, SectionContainer, SkillCard } from "./index";
import { useScreenSize } from "../hooks";

export const Skills: React.FC<{ checkItem: boolean }> = ({ checkItem }) => {
  const { matchesSM } = useScreenSize();
  return (
    <FadeInView checkItem={checkItem}>
      <SectionContainer label="Skills">
        <Grid
          item
          container
          sx={{
            margin: "0 auto",
            borderRadius: 10,
            gap: 1,
          }}
          justifyContent={matchesSM ? "space-evenly" : "space-between"}
          alignItems="center"
        >
          {skills.map((skill: any, i: number) => (
            <Grid
              item
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
