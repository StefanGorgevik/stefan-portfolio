import React from "react";
import { Grid, Typography } from "@mui/material";
interface SectionTitleProps {
  label: string;
}
export const SectionTitle: React.FC<SectionTitleProps> = ({ label }) => (
  <Grid item sx={{ width: "80%", margin: "0 auto", marginBottom: 2 }}>
    <Typography variant="h3">{label}</Typography>
  </Grid>
);
