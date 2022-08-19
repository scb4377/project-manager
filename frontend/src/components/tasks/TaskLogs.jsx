import {
  Box,
  IconButton,
  ListItem,
  Typography,
  ListItemText,
  Button,
  List,
  Collapse,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Add } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import { TransitionGroup } from "react-transition-group";
import LogModal from "../bug/LogModal";
import { useContext } from "react";
import { AppContext } from "../../context/Context";
import { useEffect } from "react";
import TaskModal from "./TaskModal";
import { AddTask, DeleteTask, GetMe } from "./TaskFunc";
//   import { GetLogs, AddLog, DeleteLog } from "./LogFuncs"

const FRUITS = [
  "🍏 Apple",
  "🍌 Banana",
  "🍍 Pineapple",
  "🥥 Coconut",
  "🍉 Watermelon",
];

function renderItem({ item, handleRemoveTask, formatDate }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveTask(item)}
        >
          <DeleteIcon color="error" />
        </IconButton>
      }
    >
      <ListItemText
        primary={
          <Typography variant="h6" fontWeight={400}>
            {item.subject}
          </Typography>
        }
        secondary={
          <>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body1"
            >
              {formatDate(item.date)}
              {" - "}
            </Typography>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body3"
            >
              {item.description}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
}

const TaskLogs = ({ tasks, setTasks }) => {
  const { mode, user, setUser, formatDate } = useContext(AppContext);
  const [taskModalOpen, setTaskModalOpen] = useState(false);

  // const getLogs = async () => {
  //   const resp = await GetLogs(bug._id, user.id)

  //   setLogs(resp)
  // }

  // useEffect(() => {
  //   if (bug) {
  //     getLogs()
  //   }

  // }, [bug])

  const taskInitialState = {
    id: Math.floor(Math.random() * 1000),
    subject: "",
    description: "",
    date: new Date(),
  };

  const [taskInput, setTaskInput] = useState(taskInitialState);

  const [subjectError, setSubjectError] = useState(false);
  const [descError, setDescError] = useState(false);

  const inputValidation = () => {
    if (taskInput.subject === "") {
      setSubjectError(true);
    } else {
      setSubjectError(false);
    }
    if (taskInput.description === "") {
      setDescError(true);
    } else {
      setDescError(false);
    }
  };

  // const addLog = async () => {
  //   const resp = await AddLog(bug._id, logFormInput)
  // }

  const pullUser = async () => {
    const resp = await GetMe()

    if (!resp) {
        console.log('Error Occured')
    } else {
        setUser(resp)
    }
  }

  const handleAddTask = () => {
    const nextHiddenItem = taskInput;
    if (
      nextHiddenItem &&
      taskInput.subject !== "" &&
      taskInput.description !== ""
    ) {
      inputValidation();
      // addLog()
      if (!tasks) {
        setTasks([nextHiddenItem]);
      } else {
        setTasks((prev) => [...prev, nextHiddenItem]);
      }
      AddTask(user.id, taskInput);
      pullUser()
      setTaskInput(taskInitialState);
      setTaskModalOpen(false);
    } else {
      inputValidation();
      return false;
    }
  };

  const deleteTask = async (id) => {
    const resp = await DeleteTask(user.id, id)

    if (!resp) {
        console.log("error occurred")
    }
  }

  const handleRemoveTask = (item) => {
    setTasks((prev) => [...prev.filter((i) => i.id !== item.id)]);
    deleteTask(item.id)
    pullUser()
  };

  const handleAddTaskModalClose = () => setTaskModalOpen(false);
  const handleAddTaskModalOpen = () => setTaskModalOpen(true);

  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        edge="end"
        aria-label="add"
        title="Add"
        onClick={handleAddTaskModalOpen}
        sx={{
          position: "absolute",
          top: "-50px",
          right: "10px",
          color: "white",
          bgcolor: "accent.primary",
          "&:hover": { bgcolor: "accent.hover" },
        }}
      >
        <Add />
      </IconButton>
      <Box>
        <List>
          <TransitionGroup>
            {tasks &&
              tasks.length > 0 &&
              tasks.map((item) => (
                <Collapse key={item.id} sx={{ borderBottom: "0.5px solid gray" }}>
                  {renderItem({ item, handleRemoveTask, formatDate })}
                </Collapse>
              ))}
          </TransitionGroup>
        </List>
      </Box>
      {taskModalOpen && (
        <TaskModal
          mode={mode}
          addTask={handleAddTask}
          taskModalOpen={taskModalOpen}
          close={handleAddTaskModalClose}
          taskFormInput={taskInput}
          setTaskFormInput={setTaskInput}
          subjectError={subjectError}
          descError={descError}
        />
      )}
    </Box>
  );
};

export default TaskLogs;
