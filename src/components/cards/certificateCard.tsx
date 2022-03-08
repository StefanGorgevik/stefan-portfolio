import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { colors } from "../../constants";
import { CertificateProps } from "~/types";

interface CertificateCardProps {
  certificate: CertificateProps;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
}) => (
  <Card
    sx={{
      minWidth: "100%",
      width: "100%",
      height: "100%",
      background: colors.primary,
      borderRadius: 10,
    }}
  >
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "100%",
      }}
    >
      <Typography variant="h5">{certificate.title}</Typography>
      <img
        src={certificate.img}
        alt="certificate"
        style={{
          width: "100%",
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      />
    </CardContent>
  </Card>
);
