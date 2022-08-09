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
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import ProjBugList from "./ProjBugList";
import ProjCommentList from "./ProjCommentList";
import ProjWidget from "./ProjWidget";

const data = [
  {
    name: "Low",
    uv: 10,
    pv: 9800,
    fill: "#55ff04",
  },
  {
    name: "Minor",
    uv: 9,
    pv: 1398,
    fill: "#eaf600",
  },
  {
    name: "Major",
    uv: 12,
    pv: 4567,
    fill: "#ffae04",
  },
  {
    name: "Critical",
    uv: 5,
    pv: 2400,
    fill: "#ff2800",
  },
];

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
      {/* <StyledDiv>
        <ProjWidget mode={mode} type="barchart" />
        <ProjWidget mode={mode} type="radialbar" />
      </StyledDiv> */}
      <Box
        p={2}
        boxShadow={5}
        borderRadius="5px"
        bgcolor={mode === "dark" ? "background.dark" : "background.default"}
        sx={{ width: "100%", position: "relative" }}
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
            sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
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
          height={300}
          width={400}
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          <ResponsiveContainer>
            <RadialBarChart
              width={400}
              height={250}
              innerRadius="20%"
              outerRadius="100%"
              data={data}
              startAngle={180}
              endAngle={0}
              barCategoryGap={3}
              cy={"80%"}
            >
              <RadialBar
                minAngle={15}
                label={{ fill: "#666", position: "insideStart" }}
                background
                clockWise={true}
                dataKey="uv"
              />
              <Legend
                iconSize={10}
                width={120}
                height={140}
                layout="vertical"
                verticalAlign="middle"
                align="left"
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </Box>

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
            spacing={3}
            display="flex"
            flexWrap="wrap"
            maxWidth={400}
            height="max-content"
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
      <ProjCommentList mode={mode} />
    </Box>
  );
};

export default ProjectView;
