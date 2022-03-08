import React from "react";
import { Grid } from "@mui/material";
import { colors } from "../constants";
import { SectionTitle } from "./ui/sectionTitle";
import { experience } from "../data/experience";
import { ExperienceCard } from "./cards/experienceCard";
import { ExperienceProps } from "../types";

export const Experience: React.FC = () => {
  return (
    <Grid item container>
      <SectionTitle label="Experience" />
      <Grid
        item
        container
        sx={{
          width: "100%",
          height: "85vh",
          margin: "0 auto",
          background: colors.secondary,
          marginTop: "20px",
          marginBottom: "20px",
          borderRadius: 10,
          gap: 1,
        }}
        justifyContent="space-between"
      >
        {experience.map((experience: ExperienceProps) => (
          <Grid item md={5} key={experience.id}>
            <ExperienceCard experience={experience} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
