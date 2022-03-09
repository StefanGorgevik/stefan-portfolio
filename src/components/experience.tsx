import React from "react";
import { Grid } from "@mui/material";
import { FadeInView, ExperienceCard, SectionContainer } from "./index";
import { experience } from "../data/experience";
import { ExperienceProps } from "../types";
import { useScreenSize } from "../hooks";

export const Experience: React.FC<{ checkItem: boolean }> = ({ checkItem }) => {
  const { matchesLG, matchesMD } = useScreenSize();

  return (
    <FadeInView checkItem={checkItem}>
      <SectionContainer label="Experience">
        <Grid
          item
          container
          sx={{
            width: matchesLG ? "100%" : "94%",
            margin: "0 auto",
            borderRadius: 10,
            gap: matchesLG ? 2 : 0.2,
          }}
          justifyContent={matchesLG ? "center" : "space-between"}
        >
          {experience.map((experience: ExperienceProps) => (
            <Grid
              item
              md={matchesLG ? (matchesMD ? 12 : 5) : 3.8}
              key={experience.id}
              sx={{ width: matchesLG ? "100%" : "auto" }}
            >
              <ExperienceCard experience={experience} />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </FadeInView>
  );
};
