import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { colors } from "../constants";
import { TabValues } from "../types/componentTypes";

export const tabs: string[] = [
  "Home",
  "Projects",
  "Skills",
  "Experience/Education",
];
interface HeaderProps {
  tabValue: TabValues;
  onTabChange: (event: React.SyntheticEvent, tab: TabValues) => unknown;
  tabName: string;
}

export const HeaderTabs: React.FC<HeaderProps> = ({
  tabValue,
  onTabChange,
  tabName,
}) => {
  return (
    <Tabs
      value={tabValue}
      onChange={onTabChange}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="scrollable force tabs example"
      sx={{
        height: 50,
      }}
    >
      {tabs.map((tab: string, i: number) => (
        <Tab
          label={tab}
          value={i}
          key={tab}
          sx={{
            borderRadius: 10,
            // backgroundColor:
            //   tab === tabName ? colors.secondary : colors.primary,
            // color: tab === tabName ? colors.primary : colors.secondary,
            backgroundColor: tabValue === i ? colors.secondary : colors.primary,
            color: tabValue === i ? colors.primary : colors.secondary,
          }}
        />
      ))}
    </Tabs>
  );
};

export const Header: React.FC<HeaderProps> = ({
  tabValue,
  onTabChange,
  tabName,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          alignItems: "flex-end",
        }}
      >
        <Toolbar sx={{ width: "100%" }}>
          <HeaderTabs
            tabValue={tabValue}
            onTabChange={onTabChange}
            tabName={tabName}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
