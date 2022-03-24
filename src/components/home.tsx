import React from "react";
import { Grid, Typography } from "@mui/material";
import { colors } from "../constants";
import { CardAvatar } from "./cards/cardAvatar";
import { useScreenSize } from "../hooks/breakpoints";
import { FadeInView } from "./index";

export const Home: React.FC<{ checkItem: boolean }> = ({ checkItem }) => {
  const { matchesLG, matchesMD } = useScreenSize();

  return (
    <FadeInView checkItem={checkItem}>
      <Grid
        item
        container
        sx={{
          width: matchesLG ? "90%" : "70%",
          margin: "0 auto",
          marginTop: matchesLG ? "5px" : "20px",
          background: colors.primary,
          borderRadius: 10,
          justifyContent: matchesMD ? "center" : "space-between",
        }}
      >
        <Grid item container md={5} alignItems="center" justifyContent="center">
          <CardAvatar />
        </Grid>
        <Grid
          item
          container
          md={6}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Grid item sx={{ marginTop: matchesMD ? "2em" : "0" }}>
            <Typography
              textAlign="center"
              variant="h4"
              color="text.secondary"
              gutterBottom
            >
              A bit about me
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              textAlign="center"
              color="text.secondary"
              gutterBottom
              variant="body1"
              sx={{
                width: matchesLG ? "90%" : "auto",
                margin: matchesLG ? "0 auto" : "auto",
              }}
            >
              A creative and innovative web developer that is open to new
              experiences and is ready to demonstrate a strong work ethic and
              creative ability. Constantly trying to improve my skills and bring
              <strong style={{ paddingLeft: "5px" }}>
                scallable, fast and responsive{" "}
              </strong>
              websites.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </FadeInView>
  );
};
