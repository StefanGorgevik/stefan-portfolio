import React from "react";

import { Grid } from "@mui/material";
import { SectionTitle } from "./sectionTitle";

export const SectionContainer: React.FC<{ label: string }> = ({
  children,
  label,
}) => {
  return (
    <Grid item container>
      <SectionTitle label={label} />
      {children}
    </Grid>
  );
};
