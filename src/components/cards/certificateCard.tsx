import React from "react";
import { Card } from "@mui/material";
import { CertificateProps } from "~/types";

export const CertificateCard: React.FC<{ certificate: CertificateProps }> = ({
  certificate,
}) => (
  <Card
    sx={{
      minWidth: "100%",
      width: "100%",
      borderRadius: 10,
    }}
  >
    <img
      src={certificate.img}
      alt="certificate"
      style={{
        width: "100%",
        height: "100%",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
      }}
    />
  </Card>
);
