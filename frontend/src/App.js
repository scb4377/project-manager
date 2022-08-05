import {
  Box,
  createTheme,
  Divider,
  Paper,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
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
      <Paper sx={{ height: "100vh" }}>
        <Box>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode} />
          </Stack>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
