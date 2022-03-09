import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { colors } from "../constants";
import { CardAvatar } from "./cards/cardAvatar";
import { useScreenSize } from "../hooks/breakpoints";
import { FadeInView } from "./index";

export const Landing: React.FC = () => {
  const { matchesLG } = useScreenSize();
  const [checkItem, setCheckItem] = useState(false);
  useEffect(() => {
    if (window.pageYOffset < 300) {
      setCheckItem(true);
    } else {
      setCheckItem(false);
    }
  }, []);
  return (
    <FadeInView checkItem={checkItem}>
      <Grid
        item
        container
        sx={{
          width: matchesLG ? "90%" : "70%",
          height: matchesLG ? "100%" : "65vh",
          margin: "0 auto",
          background: colors.primary,
          marginTop: "20px",
          paddingTop: matchesLG ? "10px" : "",
          paddingBottom: matchesLG ? "10px" : "",
          marginBottom: 3,
          borderRadius: 10,
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
          <Grid item>
            <Typography
              textAlign="center"
              variant="h2"
              color="text.secondary"
              gutterBottom
            >
              Stefan Gorgevik
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              textAlign="center"
              variant="h5"
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
              creative ability. I am a team player that is dedicated to prove my
              knowledge and to improve my skills. Experienced in making dynamic
              web sites with React and mobile applications with React Native.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </FadeInView>
  );
};
