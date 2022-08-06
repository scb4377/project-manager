import { Box, Typography } from "@mui/material";
import Widget from "./Widget";
import Chart from "./Chart";
import HomeList from "./HomeList";
import Featured from "./Featured";

const Home = () => {
  return (
    <>
      <Box flex={6} p={2} mr={2} gap={3} sx={{ display: "flex", }}>
        <Widget type="projects" />
        <Widget type="priority" />
        <Widget type="tasks" />
      </Box>
      <Box gap={3} sx={{ display: "flex" }}>
        <Box
          flex={2}
          p={2}
          ml={2}
          sx={{
            borderRadius: "5px",
            backgroundColor: "background.default",
            boxShadow: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Typography fontWeight={400} variant="h6">Priority</Typography>
          <Featured />
        </Box>
        <Box
          flex={4}
          p={2}
          mr={4}
          sx={{
            borderRadius: "5px",
            backgroundColor: "background.default",
            boxShadow: 5,
          }}
        >
          <Typography mb={2} fontWeight={400} variant="h6">
            Last 6 Months
          </Typography>
          <Chart />
        </Box>
      </Box>

      <Box
        flex={6}
        p={2}
        ml={2}
        mr={4}
        mt={2}
        mb={2}
        sx={{
          borderRadius: "5px",
          backgroundColor: "background.default",
          boxShadow: 5,
        }}
      >
        <Typography mb={2} fontWeight={400} variant="h6">
          Current Tickets
        </Typography>
        <HomeList />
      </Box>
    </>
  );
};

export default Home;
