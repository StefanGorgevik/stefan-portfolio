import React from "react";
import { Grid } from "@mui/material";
import { colors } from "../constants";
import { SectionTitle } from "./ui/sectionTitle";
import { certificates } from "../data";
import { CertificateCard } from "./cards/certificateCard";
import { CertificateProps } from "../types";
import { useScreenSize } from "../hooks";

export const Certification: React.FC = () => {
  const { matchesSM, matchesLG } = useScreenSize();
  return (
    <Grid item container>
      <SectionTitle label="Certification" />
      <Grid
        item
        container
        sx={{
          width: "95%",
          height: "50vh",
          margin: "0 auto",
          background: colors.secondary,
          marginTop: "20px",
          marginBottom: "50px",
          borderRadius: 10,
          gap: 1,
        }}
        justifyContent="space-evenly"
      >
        {certificates.map((certificate: CertificateProps) => (
          <Grid
            sx={{ width: "100%" }}
            item
            key={certificate.id}
            md={matchesLG ? 12 : 5}
          >
            <CertificateCard certificate={certificate} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
