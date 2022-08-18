import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { useLocation } from "react-router";
import { AppContext } from "../../context/Context";
import BugComments from "./BugComments";
import BugDetails from "./BugDetails";
import MyLogs from "./MyLogs";
import { GetBug } from "./GetBug"

const BugView = () => {
  const { mode } = useContext(AppContext);
  const {state} = useLocation();
  const [bug, setBug] = useState(state)

  const getState = async () => {
    const resp = await GetBug(state.id);
    console.log(resp)
    setBug(resp);
  };

  useEffect(() => {
    getState()
  }, [])


  

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
        bgcolor={mode === "dark" ? "background.dark" : "background.default"}
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <BugDetails bug={bug} />
      </Box>
      <MyLogs mode={mode} />
      <Box mt={2}>
        <BugComments mode={mode} bug={bug} />
      </Box>
    </div>
  );
};

export default BugView;
