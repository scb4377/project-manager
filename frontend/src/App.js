import {
  Box,
  createTheme,
  Paper,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from "./components/Projects";

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
