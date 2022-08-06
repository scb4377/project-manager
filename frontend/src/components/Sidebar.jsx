import {
  AccountBox,
  Group,
  Home,
  ModeNight,
  Pages,
  Person,
  Settings,
  Storefront,
  AccountTree,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  styled,
  Switch,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Add from "./Add";

const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
  listStyleType: "none",
  color: "gray",
});

const Sidebar = ({ mode, setMode }) => {
  return (
    <Paper position="fixed" gap="20px" sx={{ height: "100%" }}>
      <List>
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

        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Settings sx={{ color: "accent.primary" }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <AccountBox sx={{ color: "accent.primary" }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
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
