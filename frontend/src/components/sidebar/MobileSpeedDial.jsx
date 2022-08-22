import { Backdrop, Box, Switch } from "@mui/material";
import React, { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import {
  AccountBox,
  AccountTree,
  Group,
  Home,
  Settings,
  BugReport,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Add as AddIcon } from "@mui/icons-material";
import { useContext } from "react";
import { AppContext } from "../../context/Context";
import MobileAdd from "./MobileAdd"

const MobileSpeedDial = () => {
  const { mode, setMode, open, setOpen } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false)

  const actions = [
    { icon: <Home sx={{ color: "accent.primary" }} />, name: "Home" },
    {
      icon: <AccountTree sx={{ color: "accent.primary" }} />,
      name: "Projects",
    },
    { icon: <Group sx={{ color: "accent.primary" }} />, name: "Personnel" },
    { icon: <BugReport sx={{ color: "accent.primary" }} />, name: "Issues" },
    // { icon: <Settings sx={{ color: "accent.primary" }} />, name: "Settings" },
    { icon: <AccountBox sx={{ color: "accent.primary" }} />, name: "Profile" },
    { icon: <AddIcon sx={{ color: "accent.primary" }} onClick={() => setOpen(true)} />, name: "Add Bug" },
    {
      icon: (
        <Switch
          onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
        />
      ),
      name: "Night Mode",
    },
  ];

  const handleOpen = () => setMenuOpen(true);

  const navigate = useNavigate();

  const handleClose = (link) => {
    setMenuOpen(false);
    let destination =
      link.name === "Home"
        ? "/"
        : link.name === "Projects"
        ? "/projects"
        : link.name === "Personnel"
        ? "/personnel"
        : link.name === "Issues"
        ? "/bugs"
        : link.name === "Settings"
        ? "/settings"
        : link.name === "Profile"
        ? "/profile"
        : "";
    if (destination !== "") navigate(destination);
  };

  return (
    <Box
      sx={{
        height: 330,
        zIndex: "1000",
        transform: "translateZ(1000px)",
        flexGrow: 1,
        position: "absolute",
        bottom: "5px",
        right: "5px",
        display: { xs: "block", sm: "none" },
      }}
    >
      <Backdrop open={menuOpen} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={menuOpen}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipPlacement="left"
            onClick={() => handleClose(action)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default MobileSpeedDial;
