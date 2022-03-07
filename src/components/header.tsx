import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { colors } from "../constants";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MobileMenu } from "./ui/mobileMenu";
import { TabValues } from "../types/componentTypes";

const tabs: string[] = [
  "Home",
  "Projects",
  "Skills",
  "Experience",
  "Education",
  "Certification",
];
interface HeaderProps {
  tabValue: TabValues;
  onTabChange: (event: React.SyntheticEvent, tab: TabValues) => unknown;
}

export const HeaderTabs: React.FC<HeaderProps> = ({
  tabValue,
  onTabChange,
}) => {
  console.log("tabValues", tabValue);
  return (
    <Tabs
      value={tabValue}
      onChange={onTabChange}
      sx={{
        height: 50,
        // display: "flex",
        // flexDirection: "column",
        // width: "400px",
        // ".MuiTabs-flexContainer": {
        //   flexDirection: "column",
        //   justifyContent: "flex-start",
        //   alignItems: "flex-start",
        // },
        // backgroundColor: colors.primary,
      }}
    >
      {tabs.map((tab: string, i: number) => (
        <Tab
          label={tab}
          value={i}
          sx={{
            borderRadius: 10,
            backgroundColor: tabValue === i ? colors.secondary : colors.primary,
            color: tabValue === i ? colors.primary : colors.secondary,
          }}
        />
      ))}
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
