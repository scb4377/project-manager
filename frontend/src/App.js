import {
  Box,
  createTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/projects/Projects";
import Personnel from "./components/personnel/Personnel";
import Settings from "./components/settings/Settings";
import BugView from "./components/bug/BugView";
import ProjectView from "./components/projects/ProjectView";
import Profile from "./components/profile/Profile";
import MobileSpeedDial from "./components/sidebar/MobileSpeedDial";
import Bugs from "./components/bug/Bugs";
import Tasks from "./components/tasks/Tasks";
import Login from "./components/login/Login";

function App() {
  const [mode, setMode] = useState("light");
  const [auth, setAuth] = useState(false);

  const theme = createTheme({
    root: {
      "&.MuiDataGrid-columnHeaders": {
        color: "#2D6675",
      },
    },
    palette: {
      mode: mode,
      primary: {
        main: "#2D6675",
      },
      background: {
        dark: "rgba(255,255,255,.05)",
        gray: "lightgray",
        offWhite: "#f3f3f3",
      },
      textInput: {
        dark: "#FFF",
      },
      accent: {
        primary: "#2D6675",
        hover: "#3F8698",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!auth ? (
        <Login setAuth={setAuth} />
      ) : (
        <Paper sx={{ height: { xs: "100%", sm: "100%" }, overflowY: "scroll" }}>
          <Box sx={{ maxHeight: "100vh" }}>
            <Router>
              <Navbar mode={mode} setAuth={setAuth} />
              <Box
                flexDirection="row"
                spacing={2}
                justifyContent="space-between"
                sx={{
                  display: "flex",
                  height: "100%",
                  minHeight: { xs: "calc(100vh - 56px)", sm: "100%" },
                }}
              >
                <Box>
                  <Sidebar
                    setMode={setMode}
                    mode={mode}
                    style={{ height: "calc(100vh - 70px)" }}
                  />
                </Box>
                <MobileSpeedDial mode={mode} setMode={setMode} />
                <Box
                  sx={{
                    overflowY: "scroll",
                    width: "100%",
                    minHeight: { xs: "100%", sm: "max-content" },
                    maxHeight: { sm: "calc(100vh - 65px)" },
                    bgcolor:
                      mode === "dark"
                        ? "background.primary"
                        : "background.offWhite",
                  }}
                >
                  <Box
                    flex={11}
                    maxWidth="1100px"
                    p={2}
                    sx={{
                      width: "100%",
                      margin: "auto",
                      height: { xs: "100%", sm: "max-content" },
                    }}
                  >
                    <Routes>
                      <Route path="/" element={<Home mode={mode} />} />
                      <Route
                        path="/projects"
                        element={<Projects mode={mode} />}
                      />
                      <Route
                        path="/personnel"
                        element={<Personnel mode={mode} />}
                      />
                      <Route
                        path="/settings"
                        element={<Settings mode={mode} />}
                      />
                      <Route
                        path="/bugview"
                        element={<BugView mode={mode} />}
                      />
                      <Route
                        path="/projectview"
                        element={<ProjectView mode={mode} />}
                      />
                      <Route
                        path="/profile"
                        element={<Profile mode={mode} />}
                      />
                      <Route path="/bugs" element={<Bugs mode={mode} />} />
                      <Route path="/tasks" element={<Tasks mode={mode} />} />
                    </Routes>
                  </Box>
                </Box>
              </Box>
            </Router>
          </Box>
        </Paper>
      )}
    </ThemeProvider>
  );
}

export default App;
