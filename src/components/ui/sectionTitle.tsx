import React from "react";
import { Grid, Typography } from "@mui/material";
import { useScreenSize } from "../../hooks";
interface SectionTitleProps {
  label: string;
}
export const SectionTitle: React.FC<SectionTitleProps> = ({ label }) => {
  const { matchesLG } = useScreenSize();
  return (
    <Grid item sx={{ margin: "0 auto", width: "100%", marginBottom: 2 }}>
      <Typography variant="h3" textAlign={matchesLG ? "center" : "left"}>
        {label}
      </Typography>
    </Grid>
  );
};
