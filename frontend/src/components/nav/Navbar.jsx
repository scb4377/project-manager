import { Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../context/Context";
import { logout } from "../profile/ProfileService";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const { mode, setAuth, user } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (e) => {
    setAnchorEl(null);
    navigate("/profile");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setAuth(false);
  };

  return (
    <AppBar position="sticky" sx={{ borderRadius: "0px", boxShadow: "10px" }}>
      <StyledToolbar
        sx={{
          backgroundColor:
            mode === "dark" ? "background.dark" : "background.default",
        }}
      >
        <Typography
          p={1}
          m={0}
          variant="h6"
          sx={{ backgroundColor: "accent.primary", borderRadius: "5px" }}
        >
          Dev
        </Typography>
        <Icons>
          {/* <Badge badgeContent={4} color="warning">
            <Notifications color="primary" />
          </Badge> */}
          <Avatar
            onClick={handleClick}
            sx={{ width: 30, height: 30 }}
            src={user.img}
          />
          <Typography variant="span" sx={{color: mode === "dark" ? "white" : "black"}}>{user.firstName + " " + user.lastName}</Typography>
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={user.img}
            onClick={handleClick}
          />
          <Typography variant="span" sx={{color: mode === "dark" ? "white" : "black"}}>{user.firstName}</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem onClick={handleMenuClick}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
