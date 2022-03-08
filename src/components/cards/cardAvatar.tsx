import React from "react";
import AvatarImage from "../../assets/images/avatar.jpg";
import { Avatar, Card, CardContent, Typography } from "@mui/material";
import { colors } from "../../constants";

export const CardAvatar: React.FC = () => (
  <Card
    sx={{
      minWidth: "300px",
      width: "300px",
      height: "500px",
      background: colors.secondary,
      borderRadius: 10,
      display: "flex",
      justifyContent: "center",
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
        sx={{ width: 200, height: 200, marginBottom: 10 }}
      />
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Stefan Gorgevik
      </Typography>
      <Typography color="text.secondary" gutterBottom variant="body1">
        Software Developer
      </Typography>
    </CardContent>
  </Card>
);
