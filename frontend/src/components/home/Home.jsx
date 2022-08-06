import { Box, Typography } from "@mui/material";
import Widget from "./Widget";
import Chart from "./Chart";
import HomeList from "./HomeList";
import Featured from "./Featured";

const Home = ({mode}) => {
  return (
    <>
      <Box flex={6} p={2} gap={3} sx={{ display: "flex", scrollBehavior: 'smooth' }}>
        <Widget type="projects" mode={mode} />
        <Widget type="priority" mode={mode} />
        <Widget type="tasks" mode={mode} />
      </Box>
      <Box gap={3} sx={{ display: "flex" }}>
        <Box
        bgcolor={mode === 'dark' ? "background.dark" : "background.light"} 
          flex={2}
          p={2}
          ml={2}
          sx={{
            borderRadius: "5px",
            boxShadow: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography fontWeight={400} variant="h6">Priority</Typography>
          <Featured />
        </Box>
        <Box
        bgcolor={mode === 'dark' ? "background.dark" : "background.light"} 
          flex={4}
          p={2}
          mr={2}
          sx={{
            borderRadius: "5px",
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
      bgcolor={mode === 'dark' ? "background.dark" : "background.light"} 
        flex={6}
        p={2}
        ml={2}
        mr={2}
        mt={2}
        mb={2}
        sx={{
          borderRadius: "5px",
          boxShadow: 5,
        }}
      >
        <Typography mb={2} fontWeight={400} variant="h6">
          Needs Immeadiate Attention
        </Typography>
        <HomeList />
      </Box>
    </>
  );
};

export default Home;
