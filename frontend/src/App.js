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

function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ height: "100%" }}>
        <Box>
          <Navbar />
          <Box flexDirection='row' spacing={2} justifyContent="space-between" sx={{display: 'flex'}} >
            <Box flex={1}>
              <Sidebar setMode={setMode} mode={mode} style={{height: '100%'}} />
            </Box>
            <Box flex={11} sx={{width: '100%',  }}>
              <Home />
            </Box>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
