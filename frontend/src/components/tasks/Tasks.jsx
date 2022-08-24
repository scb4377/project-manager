import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/Context";
import Assigned from "./Assigned";
import TaskLogs from "./TaskLogs";

const Tasks = () => {
  const { mode, user } = useContext(AppContext);
  useEffect(() => {}, [user]);

  return (
    <Box display="flex" gap={2} flexDirection="column">
      <Box
        borderRadius={1}
        boxShadow={3}
        p={2}
        sx={{
          bgcolor: mode === "dark" ? "background.dark" : "background.default",
          "& .gridHeader": { color: "white", bgcolor: "accent.primary" },
        }}
      >
        <Typography
          mb={2}
          variant="h5"
          fontWeight={400}
          sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
        >
          Tasks
        </Typography>
        <TaskLogs />
      </Box>
      <Box
        borderRadius={1}
        boxShadow={3}
        p={2}
        sx={{
          bgcolor: mode === "dark" ? "background.dark" : "background.default",
          "& .gridHeader": { color: "white", bgcolor: "accent.primary" },
        }}
      >
        <Typography
          mb={2}
          variant="h6"
          fontWeight={400}
          sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
        >
          Assigned
        </Typography>
        <Box height={500}>
          <Assigned />
        </Box>
      </Box>
    </Box>
  );
};

export default Tasks;
