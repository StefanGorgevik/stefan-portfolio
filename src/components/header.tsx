import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { colors } from "../constants";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MobileMenu } from "./ui/mobileMenu";
interface HeaderProps {
  tabValue: 0 | 1 | 2;
  onTabChange: (event: React.SyntheticEvent, tab: 0 | 1 | 2) => unknown;
}

export const HeaderTabs: React.FC<HeaderProps> = ({
  tabValue,
  onTabChange,
}) => {
  return (
    <Tabs
      value={tabValue}
      onChange={onTabChange}
      indicatorColor="primary"
      sx={{
        height: 50,
        display: "flex",
        flexDirection: "column",
        width: "400px",
        ".MuiTabs-flexContainer": {
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        },
        backgroundColor: colors.primary,
      }}
    >
      <Tab
        label="Home"
        value={0}
        sx={{
          borderRadius: 10,
          backgroundColor: tabValue === 0 ? colors.secondary : "",
        }}
      />
      <Tab
        label="Projects"
        value={1}
        sx={{
          borderRadius: 10,
          backgroundColor: tabValue === 1 ? colors.secondary : "",
        }}
      />
      <Tab
        label="Experience/Education/Certification"
        sx={{
          borderRadius: 10,
          backgroundColor: tabValue === 2 ? colors.secondary : "",
        }}
        value={2}
      />
    </Tabs>
  );
};

export const Header: React.FC<HeaderProps> = ({ tabValue, onTabChange }) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          alignItems: "flex-end",
        }}
      >
        <Toolbar sx={{ width: "100%" }}>
          {!matchesMD ? (
            <HeaderTabs tabValue={tabValue} onTabChange={onTabChange} />
          ) : (
            <MobileMenu tabValue={tabValue} onTabChange={onTabChange} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
