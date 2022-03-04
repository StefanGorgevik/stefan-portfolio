import React from "react";
import { Grid, Avatar, Card, CardContent, Typography } from "@mui/material";
import { colors } from "../constants";
import AvatarImage from "../assets/images/avatar.jpg";
export const CardAvatar: React.FC = () => {
  return (
    <Card
      sx={{
        minWidth: "300px",
        width: "300px",
        height: "500px",
        background: colors.secondary,
        borderRadius: 10,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="Stefan Gorgevik"
          src={AvatarImage}
          sx={{ width: 200, height: 200 }}
        />
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Stefan Gorgevik
        </Typography>
        <Typography color="text.secondary" gutterBottom variant="caption">
          Software Developer
        </Typography>
      </CardContent>
    </Card>
  );
};

export const Landing: React.FC = () => {
  return (
    <Grid
      item
      container
      sx={{
        width: "70%",
        height: "85vh",
        margin: "0 auto",
        background: colors.primary,
        marginTop: "20px",
        marginBottom: "20px",
        borderRadius: 10,
      }}
    >
      <Grid item container md={6} alignItems="center" justifyContent="center">
        <CardAvatar />
      </Grid>
      <Grid
        item
        container
        md={5}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Grid item>
          <Typography variant="h2" color="text.secondary" gutterBottom>
            Stefan Gorgevik
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            A bit about me
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="text.secondary" gutterBottom variant="body1">
            A creative and innovative web developer that is open to new
            experiences and is ready to demonstrate a strong work ethic and
            creative ability. I am a team player that is dedicated to prove my
            knowledge and to improve my skills. Experienced in making dynamic
            web sites with React and mobile applications with React Native.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
