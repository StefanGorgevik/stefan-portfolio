import React from "react";

import { Grid, Typography } from "@mui/material";
import { colors } from "../constants";
import { SectionContainer, CertificateCard, Skill } from "./index";
import { useScreenSize } from "../hooks";
import { certificates } from "../data";
import { CertificateProps } from "../types";

export const Education: React.FC = () => {
  const { matchesLG } = useScreenSize();
  return (
    <SectionContainer label="Education">
      <Grid
        item
        container
        sx={{
          padding: matchesLG ? "10px 30px" : "5px 40px",
          margin: "0 auto",
          background: colors.secondary,
          paddingBottom: "40px",
          borderRadius: 10,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Grid item>
          <Typography variant="h6" textAlign="center">
            Semos Education, Skopje, North Macedonia
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">March 2019 - February 2020</Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ maxWidth: matchesLG ? "90%" : "80%", margin: "0 auto" }}
          >
            I have worked and understood the connection between the front-end
            and the back-end when it comes to developing a web application,
            including the architectural pattern MVC. I have a good understanding
            of the communication between the handlers of the back-end and the UI
            in the front end.
          </Typography>
        </Grid>
        <Grid
          item
          container
          sx={{
            width: "100%",
            display: matchesLG ? "grid" : "flex",
            gridTemplateColumns: matchesLG ? "1fr 1fr" : "1fr",
            justifyContent: "space-around",
            paddingTop: 3,
            flexDirection: "row",
            rowGap: 1,
            margin: matchesLG ? "0 auto" : "auto",
          }}
        >
          {[
            "HTML/CSS",
            "Git",
            "Javascript",
            "React JS",
            "Node.JS",
            "MongoDB",
          ].map((skill: string) => (
            <Grid
              item
              md={matchesLG ? 12 : 1.7}
              key={skill}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Skill skill={skill} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        container
        sx={{
          height: "50vh",
          margin: "0 auto",
          marginTop: "20px",
          marginBottom: "50px",
          borderRadius: 10,
          gap: matchesLG ? 1 : 3,
          display: matchesLG ? "flex" : "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
        justifyContent="space-evenly"
      >
        {certificates.map((certificate: CertificateProps) => (
          <Grid sx={{ width: "100%" }} item key={certificate.id}>
            <CertificateCard certificate={certificate} />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};
