import { Box, Typography } from "@mui/material";
import Widget from "./Widget";
import Chart from "./Chart";
import HomeList from "./HomeList";
import Featured from "./Featured";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/Context";
import { toast } from 'react-toastify'

const Home = () => {
  const { mode, bugList } = useContext(AppContext);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    

    let critical = 0;
    let major = 0;
    let minor = 0;
    let low = 0;
    bugList.forEach((bug) => {
      if (bug.priority === 4) {
        critical += 1;
      } else if (bug.priority === 3) {
        major += 1;
      } else if (bug.priority === 2) {
        minor += 1;
      } else if (bug.priority === 1) {
        low += 1;
      }
    });

    setData([
      { name: "Mar", critical: 10, major: 9, minor: 2, low: 13 },
      { name: "Apr", critical: 15, major: 13, minor: 18, low: 8 },
      { name: "May", critical: 14, major: 16, minor: 13, low: 4 },
      { name: "Jun", critical: 10, major: 7, minor: 4, low: 13 },
      { name: "July", critical: 5, major: 3, minor: 11, low: 15 },
      { name: "Aug", critical: critical, major: major, minor: minor, low: low },
    ]);
  }, [bugList]);

  return (
    <>
      <Box
        flex={6}
        gap={3}
        sx={{
          display: "flex",
          scrollBehavior: "smooth",
          flexWrap: "wrap",
          gap: { xs: "20px" },
        }}
      >
        <Widget type="projects" />
        <Widget type="issues" />
        <Widget type="tasks" />
        <Widget type="assigned" />
      </Box>
      <Box
        gap={3}
        mt={3}
        mb={3}
        sx={{
          display: {xs: "none", sm: "flex"},
          flexWrap: "wrap",
          gap: { xs: "20px" },
          minHeight: "300px",
        }}
      >
        <Box
          bgcolor={mode === "dark" ? "background.dark" : "background.default"}
          flex={2}
          p={2}
          boxShadow={3}
          borderRadius={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: { xs: 0 },
            width: "300px",
            minWidth: { xs: "100%", sm: "300px" },
            minHeight: "300px",
            height: '300px'
          }}
        >
          <Typography
            fontWeight={400}
            variant="h6"
            sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
          >
            Stages
          </Typography>
          <Featured />
        </Box>
        <Box
          bgcolor={mode === "dark" ? "background.dark" : "background.default"}
          flex={4}
          p={2}
          boxShadow={3}
          borderRadius={1}
          sx={{width: {sm: "100%", md: "678px"}}}
        >
          <Typography
            mb={2}
            fontWeight={400}
            variant="h6"
            sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
          >
            Last 6 Months
          </Typography>
          {Array.isArray(data) && data.length > 0 && <Chart data={data} />}
        </Box>
      </Box>

      <Box
        bgcolor={mode === "dark" ? "background.dark" : "background.default"}
        flex={6}
        p={2}
        boxShadow={3}
        borderRadius={1}
        sx={{margin: {xs: "16px 0", sm: "0"}}}
      >
        <Typography
          mb={2}
          fontWeight={400}
          variant="h6"
          sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
        >
          Needs Immeadiate Attention
        </Typography>
        <HomeList />
      </Box>
      <Box sx={{display: {xs: 'none', sm: 'block'}, color: "transparent"}}>H</Box>
    </>
  );
};

export default Home;
