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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
        dark: 'rgba(255,255,255,.05)'
      },
      accent: {
        primary: 'skyblue'
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper sx={{ height: "100%" }}>
        <Box>
          <Navbar />
          <Router>
            <Box flexDirection='row' spacing={2} justifyContent="space-between" sx={{display: 'flex'}} >
            <Box flex={1} bgcolor={mode === 'dark' ? "background.dark" : "background.light"} >
              <Sidebar setMode={setMode} mode={mode} style={{height: '100%'}} />
            </Box>
            <Box flex={11} sx={{width: '100%', minHeight: 'calc(100vh - 65px)', bgcolor: 'background.default'  }}>
                <Routes>
                  <Route path='/' element={<Home mode={mode} />} />
                  <Route path='/projects' element={<Projects mode={mode} />} />
                  <Route path="/personnel" element={<Personnel mode={mode}  />} />
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
