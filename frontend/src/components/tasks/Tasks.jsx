import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/Context";
import Assigned from "./Assigned";
import { rows, columns, mobileColumns } from "./TasksLayout";
import TaskLogs from "./TaskLogs"
import { useEffect } from "react";

const Tasks = () => {
  const { mode, bugList, user, teamList } = useContext(AppContext);
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
      setTaskList(user.tasks)
  }, [user])

  

  return (
    <Box display="flex" gap={2} flexDirection="column">
      <Box
        borderRadius={2}
        boxShadow={5}
        p={2}
        sx={{
          bgcolor: mode === "dark" ? "background.dark" : "background.default",
          "& .gridHeader": { color: "white", bgcolor: "accent.primary" },
        }}
      >
        {console.log(taskList)}
        <Typography
          mb={2}
          variant="h5"
          fontWeight={400}
          sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
        >
          Tasks
        </Typography>
        <TaskLogs tasks={taskList} setTasks={setTaskList} />
      </Box>
      <Box
        borderRadius={2}
        boxShadow={5}
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
          <Assigned rows={rows} />
        </Box>
        
      </Box>
    </Box>
  );
};

export default Tasks;
