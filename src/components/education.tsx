import React from "react";
import { Grid, Typography } from "@mui/material";
import { colors } from "../constants";
import { SectionTitle } from "./ui/sectionTitle";
import { useScreenSize } from "../hooks";

export const Education: React.FC = () => {
  const { matchesLG } = useScreenSize();
  return (
    <Grid item container>
      <SectionTitle label="Education" />
      <Grid
        item
        container
        sx={{
          width: "85%",
          height: matchesLG ? "100%" : "25vh",
          padding: matchesLG ? "10px 30px" : "0 40px",
          margin: "0 auto",
          background: colors.primary,
          marginTop: "20px",
          marginBottom: "20px",
          borderRadius: 10,
          gap: 1,
        }}
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h6" textAlign="center">
          Semos Education, Skopje, North Macedonia
        </Typography>
        <Typography variant="caption">March 2019 - February 2020</Typography>

        <Typography variant="body1" textAlign="center">
          I have worked and understood the connection between the front-end and
          the back-end when it comes to developing a web application, including
          the architectural pattern MVC. I have a good understanding of the
          communication between the handlers of the back-end and the UI in the
          front end. During the course that lasted aproximately 1 year, I have
          acknowledged skills with languages and frameworks such as Javascript,
          DOM,ReactJS, NodeJS and MongoDB, altogether with multiple libraries.
        </Typography>
      </Grid>
    </Grid>
  );
};
