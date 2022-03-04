import React from "react";
import Avatar from "@mui/material/Avatar";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { colors } from "../constants";

export const CardAvatar: React.FC = () => {
  return (
    <Card sx={{ minWidth: 275, height: 500 }}>
      <CardContent>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
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
      }}
    >
      <Card />
    </Grid>
  );
};
