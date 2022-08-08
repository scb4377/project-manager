import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import ProjWidget from "./ProjWidget";

const StyledDiv = styled("div")({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "20px",
});

const ProjectView = ({ mode }) => {
    const { state } = useLocation()

    console.log(state)

  return (
    <Box
      p={2}
      display="flex"
      justifyContent="space-evenly"
      flexDirection="column"
      width="100%"
      margin="auto"
      gap={3}
    >
      <StyledDiv>
        <ProjWidget mode={mode} type="barchart" />
        <ProjWidget mode={mode} type="radialbar" />
      </StyledDiv>
      <Box p={2} boxShadow={5} borderRadius="5px" sx={{width: '100%'}}>
        <Typography mb={2} variant="h6" fontWeight={400} sx={{borderBottom: '0.5px solid gray', width: 'max-content'}} >Project Details</Typography>
        <Box display="flex" justifyContent="space-between">
            <p>Hello</p>
            <div>
                <div>
                    <label>Name:</label>
                <span>{state.name}</span>
                </div>
                <div>
                    <label>Created:</label>
                <span>{state.created}</span>
                </div>
            </div>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectView;
