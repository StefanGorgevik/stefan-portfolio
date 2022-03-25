import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { projects } from "../data/projects";
import { FadeInView, SectionContainer, ProjectCard } from "./index";
import { useScreenSize } from "../hooks";
import { colors } from "../constants";

export const Projects: React.FC<{ checkItem: boolean }> = ({ checkItem }) => {
  const { matchesLG } = useScreenSize();
  return (
    <FadeInView checkItem={checkItem}>
      <SectionContainer label="Projects">
        <Grid
          item
          container
          sx={{
            margin: "0 auto",
            borderRadius: 10,
            gap: 1,
          }}
          justifyContent={matchesLG ? "center" : "space-between"}
          alignItems="center"
        >
          {projects.map((proj) => (
            <Grid item md={matchesLG ? 6 : 3.5} key={proj.id}>
              <ProjectCard project={proj} i={proj.id} />
            </Grid>
          ))}
        </Grid>
        <Grid item container>
          <Card
            sx={{
              backgroundColor: colors.secondary,
              marginTop: "1em",
              width: "100%",
              borderRadius: 10,
              padding: 1,
            }}
          >
            <CardContent>
              <Typography variant="h5" textAlign="center" paddingBottom="10px">
                Sit.Com (React Native)
              </Typography>
              <Typography textAlign="center">
                React native application for the Sit.Com website. Currently, it
                requires to have the expo application
              </Typography>
              <Typography variant="body2" textAlign="center" gutterBottom>
                Requirements to run: Expo app on mobile device
              </Typography>
              <Typography variant="body2" textAlign="center" gutterBottom>
                Copy and open this link in Expo on your device
              </Typography>
              <Typography variant="body1" textAlign="center">
                exp://exp.host/@stefan.gg/sitcom-app?release-channel=default
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </SectionContainer>
    </FadeInView>
  );
};
