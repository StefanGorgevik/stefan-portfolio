import React from "react";
import AvatarImage from "../../assets/images/avatar.jpg";
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { colors } from "../../constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
      flexDirection: "column",
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
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Box>
        <IconButton
          onClick={() => window.open("https://github.com/StefanGorgevik")}
        >
          <GitHubIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/stefan-gorgevik-88058918b/"
            )
          }
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </CardContent>
  </Card>
);
