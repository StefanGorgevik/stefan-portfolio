import React from "react";
import { Grid } from "@mui/material";
import { colors } from "../constants";
import { SectionTitle } from "./ui/sectionTitle";

export const Experience: React.FC = () => {
  return (
    <Grid item container>
      <SectionTitle label="Experience" />
      <Grid
        item
        container
        sx={{
          width: "90%",
          height: "85vh",
          margin: "0 auto",
          background: colors.secondary,
          marginTop: "20px",
          marginBottom: "20px",
          borderRadius: 10,
          gap: 1,
        }}
        justifyContent="space-evenly"
        alignItems="center"
      ></Grid>
    </Grid>
  );
};
