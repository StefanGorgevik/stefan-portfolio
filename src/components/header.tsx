import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { colors } from "../constants";

interface HeaderProps {
  tabValue: number;
  onTabChange: (event: React.SyntheticEvent, tab: number) => unknown;
}
export const Header: React.FC<HeaderProps> = ({ tabValue, onTabChange }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          alignItems: "flex-end",
        }}
      >
        <Toolbar>
          <Tabs
            value={tabValue}
            onChange={onTabChange}
            indicatorColor="primary"
            sx={{ height: 50 }}
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};
