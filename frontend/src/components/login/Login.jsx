import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import login from "../../images/login.jpg";
import React from "react";
import { useState } from "react";
import { loginFunc, demoFunc } from "./LoginService";
import { useContext } from "react";
import { AppContext } from "../../context/Context";

const Login = () => {
  const { setAuth, setUser } = useContext(AppContext);
  const initialState = {
    username: "",
    password: "",
  };

  const [formInput, setFormInput] = useState(initialState);

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    try {
      let response = await loginFunc(formInput);
      if (response) {
        setAuth(true);
        setUser(response)
      }
    } catch (err) {
      console.log("Login Error");
    }
  };

  const handleDemo = async (e) => {
    try {
      let response = await demoFunc();
      if (response) {
        setAuth(true);
        setUser(response)
      }
    } catch (err) {
      console.log("Login Error");
    }
  };

  return (
    <Paper
      sx={{
        height: "100vh",
        maxHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        width="50%"
        height="100%"
        sx={{
          backgroundImage: `url(${login})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          display: { xs: "none", sm: "block" },
        }}
      ></Box>
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={3}
        sx={{ width: { xs: "100%", sm: "50%" } }}
      >
        <Typography
          variant="h4"
          sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
        >
          Login
        </Typography>
        <Box
          p={2}
          display="flex"
          flexDirection="column"
          gap={3}
          sx={{ width: { xs: "100%", sm: "300px", md: "400px" } }}
        >
          <TextField
            variant="filled"
            name="username"
            value={formInput.username}
            label="Username"
            onChange={handleChange}
          />
          <TextField
            variant="filled"
            type="password"
            name="password"
            value={formInput.password}
            label="Password"
            onChange={handleChange}
          />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button
              sx={{
                bgcolor: "accent.primary",
                color: "white",
                minWidth: "100px",
                transition: "0.2s all ease-in-out",
                "&:hover": { bgcolor: "accent.hover" },
              }}
              onClick={handleLogin}
            >
              Submit
            </Button>
            <Button
              sx={{
                bgcolor: "accent.primary",
                color: "white",
                minWidth: "100px",
                transition: "0.2s all ease-in-out",
                "&:hover": { bgcolor: "accent.hover" },
              }}
              onClick={handleDemo}
            >
              Demo
            </Button>
          </div>
        </Box>
      </Box>
    </Paper>
  );
};

export default Login;
