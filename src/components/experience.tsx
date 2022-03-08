import React from "react";
import { Grid } from "@mui/material";
import { colors } from "../constants";
import { SectionTitle } from "./ui/sectionTitle";
import { experience } from "../data/experience";
import { ExperienceCard } from "./cards/experienceCard";
import { ExperienceProps } from "../types";
import { useScreenSize } from "../hooks";

export const Experience: React.FC = () => {
  const { matchesLG } = useScreenSize();
  return (
    <Grid item container>
      <SectionTitle label="Experience" />
      <Grid
        item
        container
        sx={{
          width: matchesLG ? "100%" : "87%",
          height: matchesLG ? "100%" : "20vh",
          margin: "0 auto",
          background: colors.secondary,
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
    </Grid>
  );
};
