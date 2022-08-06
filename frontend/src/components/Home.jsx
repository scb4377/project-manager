import { Box } from "@mui/material";
import Widget from "./Widget";
import Chart from "./Chart";

const Home = () => {
  return (
    <Box flex={6} sx={{ display: "flex", flexDirection: "column", }}>
      <Box flex={6} p={2} mr={2}  gap={3} sx={{ display: "flex" }}>
        <Widget type="projects" />
        <Widget type="priority" />
        <Widget type="tasks" />
      </Box>
      <Box flex={6} p={2} ml={2} mr={4} sx={{ borderRadius: '5px', backgroundColor: 'background.default', boxShadow: 5, }}>
        <Chart />
      </Box>
      
    </Box>
  );
};

export default Home;
