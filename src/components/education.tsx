import React from "react";

import { Grid, Typography } from "@mui/material";
import { colors } from "../constants";
import { FadeInView, SectionContainer, CertificateCard } from "./index";
import { useScreenSize } from "../hooks";
import { certificates } from "../data";
import { CertificateProps } from "../types";

export const Education: React.FC<{ checkItem: boolean }> = ({ checkItem }) => {
  const { matchesLG } = useScreenSize();
  return (
    <FadeInView checkItem={checkItem}>
      <SectionContainer label="Education">
        <Grid
          item
          container
          sx={{
            width: "85%",
            height: matchesLG ? "100%" : "100%",
            padding: matchesLG ? "10px 30px" : "5px 40px",
            margin: "0 auto",
            background: colors.secondary,
            marginTop: "20px",
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
            <Typography variant="caption">
              March 2019 - February 2020
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{ maxWidth: "80%", margin: "0 auto" }}
            >
              I have worked and understood the connection between the front-end
              and the back-end when it comes to developing a web application,
              including the architectural pattern MVC. I have a good
              understanding of the communication between the handlers of the
              back-end and the UI in the front end.
            </Typography>
          </Grid>
          <Grid
            item
            container
            sx={{
              width: "100%",
              justifyContent: "space-around",
              paddingTop: 3,
            }}
          >
            {[
              "HTML",
              "CSS",
              "Git",
              "Javascript",
              "React JS",
              "Node.JS",
              "MongoDB",
            ].map((skill: string) => (
              <Grid item key={skill}>
                <Typography
                  variant="h6"
                  sx={{
                    backgroundColor: colors.primary,
                    width: "150px",
                    borderRadius: 10,
                  }}
                  textAlign="center"
                >
                  {skill}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          container
          sx={{
            width: "95%",
            height: "50vh",
            margin: "0 auto",
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
              md={matchesLG ? 12 : 3}
            >
              <CertificateCard certificate={certificate} />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </FadeInView>
  );
};
