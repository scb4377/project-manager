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
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Add as AddIcon } from "@mui/icons-material";

const actions = [
  { icon: <Home sx={{ color: "accent.primary" }} />, name: "Home" },
  { icon: <AccountTree sx={{ color: "accent.primary" }} />, name: "Projects" },
  { icon: <Group sx={{ color: "accent.primary" }} />, name: "Personnel" },
  { icon: <Settings sx={{ color: "accent.primary" }} />, name: "Settings" },
  { icon: <AccountBox sx={{ color: "accent.primary" }} />, name: "Profile" },
  { icon: <AddIcon />, name: 'Add Bug'},
  { icon: <Switch onChange />, name: "Night Mode" },
];

const MobileSpeedDial = ({ mode, setMode }) => {
  const actions = [
    { icon: <Home sx={{ color: "accent.primary" }} />, name: "Home" },
    {
      icon: <AccountTree sx={{ color: "accent.primary" }} />,
      name: "Projects",
    },
    { icon: <Group sx={{ color: "accent.primary" }} />, name: "Personnel" },
    { icon: <Settings sx={{ color: "accent.primary" }} />, name: "Settings" },
    { icon: <AccountBox sx={{ color: "accent.primary" }} />, name: "Profile" },
    { icon: <AddIcon sx={{ color: "accent.primary" }} />, name: "Add Bug" },
    {
      icon: (
        <Switch
          onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
        />
      ),
      name: "Night Mode",
    },
  ];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const navigate = useNavigate();

  const handleClose = (link) => {
    setOpen(false);
    let destination =
      link.name === "Home"
        ? "/"
        : link.name === "Projects"
        ? "/projects"
        : link.name === "Personnel"
        ? "/personnel"
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
        display: { xs: "block", sm: "none", },
      }}
    >
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
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