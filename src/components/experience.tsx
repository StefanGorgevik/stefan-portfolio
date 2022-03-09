import React from "react";
import { Grid } from "@mui/material";
import { FadeInView, ExperienceCard, SectionContainer } from "./index";
import { experience } from "../data/experience";
import { ExperienceProps } from "../types";
import { useScreenSize } from "../hooks";

export const Experience: React.FC<{ checkItem: boolean }> = ({ checkItem }) => {
  const { matchesLG } = useScreenSize();

  return (
    <FadeInView checkItem={checkItem}>
      <SectionContainer label="Experience">
        <Grid
          item
          container
          sx={{
            width: matchesLG ? "100%" : "87%",
            height: matchesLG ? "100%" : "25vh",
            margin: "0 auto",
            marginTop: "20px",
            marginBottom: "20px",
            borderRadius: 10,
            gap: matchesLG ? 2 : 0.2,
          }}
          justifyContent={matchesLG ? "center" : "space-between"}
        >
          {experience.map((experience: ExperienceProps) => (
            <Grid item md={3.5} key={experience.id}>
              <ExperienceCard experience={experience} />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </FadeInView>
  );
};
