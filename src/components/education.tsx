import React from "react";
import { Grid, Typography } from "@mui/material";
import { colors } from "../constants";

export const Education: React.FC = () => {
  return (
    <Grid
      item
      container
      sx={{
        width: "70%",
        height: "85vh",
        margin: "0 auto",
        background: colors.primary,
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      Education
    </Grid>
  );
};
