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
        main: "#2D6675"
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
      <Paper sx={{ height: "100%" }}>
        <Box>
          <Navbar mode={mode} />

          <Router>
            <Box
              flexDirection="row"
              spacing={2}
              justifyContent="space-between"
              sx={{ display: "flex" }}
            >
              <Box>
                <Sidebar
                  setMode={setMode}
                  mode={mode}
                  style={{ height: "calc(100vh - 70px)" }}
                />
              </Box>
              <Box
                sx={{
                  overflowY: "scroll",
                  width: "100%",
                  height: "calc(100vh - 70px)",
                  minHeight: "100%",
                }}
              >
                <Box
                  flex={11}
                  maxWidth="1100px"
                  sx={{
                    width: "100%",
                    margin: "auto",
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
