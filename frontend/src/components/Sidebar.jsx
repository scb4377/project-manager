import {
  AccountBox,
  Group,
  Home,
  ModeNight,
  Pages,
  Person,
  Settings,
  Storefront,
  AccountTree
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Switch,
} from "@mui/material";
import Add from "./Add";

const Sidebar = ({mode, setMode}) => {
  return (
      <Paper position="fixed" gap='20px' bgcolor={"background.primary"} sx={{height: '100%'}}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#projects">
              <ListItemIcon>
                <AccountTree />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#coworkers">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Personel" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={(e) => setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
        </List>
        <Add />
      </Paper>
  );
};

export default Sidebar;
