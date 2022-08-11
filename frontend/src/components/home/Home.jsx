import { Box, Typography } from "@mui/material";
import Widget from "./Widget";
import Chart from "./Chart";
import HomeList from "./HomeList";
import Featured from "./Featured";

const Home = ({ mode }) => {
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
        <Widget type="projects" mode={mode} />
        <Widget type="issues" mode={mode} />
        <Widget type="tasks" mode={mode} />
      </Box>
      <Box
        gap={3}
        mt={3}
        mb={3}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: "20px" },
          minHeight: "320px",
        }}
      >
        <Box
          bgcolor={mode === "dark" ? "background.dark" : "background.light"}
          flex={2}
          p={2}
          sx={{
            borderRadius: "5px",
            boxShadow: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: { xs: 0 },
            width: "300px",
            minWidth: { xs: "100%", sm: "300px" },
            minHeight: "300px"
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
          bgcolor={mode === "dark" ? "background.dark" : "background.light"}
          flex={4}
          p={2}
          sx={{
            borderRadius: "5px",
            boxShadow: 5,
            backdropFilter: "blur(20px) saturate(100%)",
            marginRight: { xs: 0 },
          }}
        >
          <Typography
            mb={2}
            fontWeight={400}
            variant="h6"
            sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
          >
            Last 6 Months
          </Typography>
          <Chart />
        </Box>
      </Box>

      <Box
        bgcolor={mode === "dark" ? "background.dark" : "background.light"}
        flex={6}
        p={2}
        sx={{
          borderRadius: "5px",
          boxShadow: 5,
        }}
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
    </>
  );
};

export default Home;
