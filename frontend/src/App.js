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

function App() {
  const [mode, setMode] = useState("light");

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
      <Paper sx={{ height: { xs: "100%", sm: "100%" }, overflowY: 'scroll' }}>
        <Box sx={{ maxHeight: "100vh" }}>
          <Router>
            <Navbar mode={mode} />
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
                    <Route path="/bugview" element={<BugView mode={mode} />} />
                    <Route
                      path="/projectview"
                      element={<ProjectView mode={mode} />}
                    />
                    <Route path="/profile" element={<Profile mode={mode} />} />
                  </Routes>
                </Box>
              </Box>
            </Box>
          </Router>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
