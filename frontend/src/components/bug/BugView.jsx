import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { useLocation } from "react-router";
import { AppContext } from "../../context/Context";
import BugComments from "./BugComments";
import BugDetails from "./BugDetails";
import MyLogs from "./MyLogs";

const BugView = () => {
  const { mode } = useContext(AppContext);

  const location = useLocation();

  return (
    <div>
      {/* <Box
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
      </Box> */}
      <Box
        flex={6}
        p={2}
        mb={2}
        boxShadow={5}
        borderRadius="5px"
        bgcolor={mode === "dark" ? "background.dark" : "background.light"}
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <BugDetails bug={location.state} />
      </Box>
      <MyLogs mode={mode} />
      <Box mt={2}>
        <BugComments mode={mode} />
      </Box>
    </div>
  );
};

export default BugView;
