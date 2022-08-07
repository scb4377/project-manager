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

function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
      background: {
        dark: "rgba(255,255,255,.05)",
        gray: "lightgray",
      },
      textInput: {
        dark: "#FFF"
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
          <Navbar />
          <Router>
            <Box
              flexDirection="row"
              spacing={2}
              justifyContent="space-between"
              sx={{ display: "flex" }}
            >
              <Box flex={1}>
                <Sidebar
                  setMode={setMode}
                  mode={mode}
                  style={{ height: "calc(100vh - 70px)" }}
                />
              </Box>
              <Box
                flex={11}
                sx={{
                  width: "100%",
                  height: "calc(100vh - 70px)",
                  minHeight: "calc(100vh - 65px)",
                  overflowY: "scroll",
                }}
              >
                <Routes>
                  <Route path="/" element={<Home mode={mode} />} />
                  <Route path="/projects" element={<Projects mode={mode} />} />
                  <Route
                    path="/personnel"
                    element={<Personnel mode={mode} />}
                  />
                  <Route path="/settings" element={<Settings mode={mode} />} />
                  <Route path="/bugview" element={<BugView mode={mode} />} />
                </Routes>
              </Box>
            </Box>
          </Router>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
