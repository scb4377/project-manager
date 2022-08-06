import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router";
import BugDetails from "./BugDetails";

const BugView = ({ mode }) => {
  const location = useLocation();

  return (
    <div style={{marginRight: '16px'}}>
      <Box
        flex={6}
        p={2}
        m={2}
        boxShadow={5}
        borderRadius="5px"
        bgcolor={mode === "dark" ? "background.dark" : "background.light"}
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <div>Bug</div>
        <div>Bug</div>
        <div>Bug</div>
        <div>Bug</div>
        <div>Bug</div>
      </Box>
      <Box
        flex={6}
        p={2}
        m={2}
        boxShadow={5}
        borderRadius="5px"
        bgcolor={mode === "dark" ? "background.dark" : "background.light"}
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <BugDetails />
      </Box>
    </div>
  );
};

export default BugView;
