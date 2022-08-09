import {
  Avatar,
  AvatarGroup,
  Box,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import ProjBugList from "./ProjBugList";
import ProjWidget from "./ProjWidget";

const StyledDiv = styled("div")({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "20px",
});

const ProjectView = ({ mode }) => {
  const { state } = useLocation();

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
      <Box
        p={2}
        boxShadow={5}
        borderRadius="5px"
        bgcolor={mode === "dark" ? "background.dark" : "background.default"}
        sx={{ width: "100%" }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={400}
          >
            {state.name}
          </Typography>
          <Box
            ml={4}
            p={1}
            pl={3}
            pr={3}
            borderRadius="5px"
            color="white"
            boxShadow={5}
            bgcolor={"accent.primary"}
          >
            <Typography fontWeight={200} variant="label">
              Project Stage
            </Typography>
            <Typography>Design</Typography>
          </Box>
        </span>

        <Box
          mb={2}
          p={0}
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
          width={400}
        >
          <span style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "bold" }}>{state.name}</span>
            <label>Company</label>
          </span>
          <span style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "bold" }}>{state.created}</span>
            <label>Start Date</label>
          </span>
          <span style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "bold" }}>32</span>
            <label>Issues</label>
          </span>
          <span style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "bold" }}>32</span>
            <label>Assignees</label>
          </span>
        </Box>
        <Box mb={2} alignItems="left" sx={{ textAlign: "left" }}>
          <Typography mb={2}>Assignees</Typography>
          <Stack
            direction="row"
            spacing={2}
            display="flex"
            flexWrap="wrap"
            sx={{ marginBottom: "40px" }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Stack>
        </Box>

        <ProjBugList />
      </Box>
    </Box>
  );
};

export default ProjectView;
