import {
  AccountBox,
  Group,
  Home,
  ModeNight,
  Settings,
  AccountTree,
  Assignment,
  BugReport
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  styled,
  Switch,
} from "@mui/material";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../../context/Context";
import Add from "./Add";

const Sidebar = () => {
  const { mode, setMode } = useContext(AppContext)

  const StyledNavLink = styled(NavLink)({
    textDecoration: "none",
    listStyleType: "none",
    color: mode === "dark" ? "white" : "black",
  });

  return (
    <Paper position="fixed" gap="20px" pb={0} sx={{ paddingBottom: 0, height: "calc(100vh - 65px)", display: {xs: 'none', sm: 'block'} }}>
      <List pb={0} sx={{ backgroundColor: "background.dark", height: "100%" }}>
        <StyledNavLink to="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home sx={{ color: "accent.primary" }} />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
        </StyledNavLink>

        <StyledNavLink to="/projects">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountTree sx={{ color: "accent.primary" }} />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
        </StyledNavLink>

        <StyledNavLink to="/bugs">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BugReport sx={{ color: "accent.primary" }} />
              </ListItemIcon>
              <ListItemText primary="Issues" />
            </ListItemButton>
          </ListItem>
        </StyledNavLink>

        <StyledNavLink to="/tasks">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Assignment sx={{ color: "accent.primary" }} />
              </ListItemIcon>
              <ListItemText primary="Tasks" />
            </ListItemButton>
          </ListItem>
        </StyledNavLink>

        <StyledNavLink to="/personnel">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group sx={{ color: "accent.primary" }} />
              </ListItemIcon>
              <ListItemText primary="Personnel" />
            </ListItemButton>
          </ListItem>
        </StyledNavLink>

        {/* <StyledNavLink to="/settings">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings sx={{ color: "accent.primary" }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </StyledNavLink> */}

        <StyledNavLink to="/profile">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBox sx={{ color: "accent.primary" }} />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </StyledNavLink>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNight sx={{ color: "accent.primary" }} />
            </ListItemIcon>
            <Switch
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Add />
    </Paper>
  );
};

export default Sidebar;
