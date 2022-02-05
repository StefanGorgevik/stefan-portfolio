import React, { useContext, useMemo } from "react";
import {
  IconButton,
  useMediaQuery,
  useTheme,
  Tooltip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Toolbar,
  Typography,
  AppBar,
  Link,
} from "@mui/material";
import { map } from "lodash-es";
import { useNavigate } from "react-router";

interface HeaderItem {
  path: any;
}

const HeaderItem: React.FC<HeaderItem> = ({ path }) => {
  const navigate = useNavigate();
  return (
    <ListItem disablePadding >
      <ListItemButton onClick={() => navigate(path.path)} >
        <ListItemText  sx={{ textAlign: "center" }} primary={path.text} />
      </ListItemButton>
    </ListItem>
  );
};

export const Header: React.FC = () => {
  const paths = useMemo(() => {
    return [
      {
        id: 1,
        text: "Personal Info",
        path: "/personal-info",
      },
      {
        id: 2,
        text: "Education/experience",
        path: "/education-and-experience",
      },
      {
        id: 3,
        text: "Technical Skills",
        path: "/technical-skills",
      },
      {
        id: 4,
        text: "Projects",
        path: "/projects",
      },
    ];
  }, []);
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "80px" }}>
      <AppBar position="fixed">
        <Toolbar>
          <List
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            {map(paths, (path: any) => (
              <HeaderItem key={path.id} path={path} />
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
