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
import LogModal from "./LogModal";

const FRUITS = [
  "🍏 Apple",
  "🍌 Banana",
  "🍍 Pineapple",
  "🥥 Coconut",
  "🍉 Watermelon",
];

function renderItem({ item, handleRemoveLog }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveLog(item)}
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
              {item.date}
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

const logData = [
  {
    id: 1,
    subject:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nulla!",
    date: "04-07-27",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta natus asperiores quod, a exercitationem ullam est repudiandae. Eos, dolorem inventore.",
  },
  {
    id: 2,
    subject:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nulla!",
    date: "04-07-27",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta natus asperiores quod, a exercitationem ullam est repudiandae. Eos, dolorem inventore.",
  },
  {
    id: 3,
    subject:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nulla!",
    date: "04-07-27",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta natus asperiores quod, a exercitationem ullam est repudiandae. Eos, dolorem inventore.",
  },
  {
    id: 4,
    subject:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nulla!",
    date: "04-07-27",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta natus asperiores quod, a exercitationem ullam est repudiandae. Eos, dolorem inventore.",
  },
];

const MyLogs = ({ mode }) => {
  const [logs, setLogs] = useState(logData);
  const [logModalOpen, setLogModalOpen] = useState(false);

  const logInitialState = {
    id: 1,
    subject: "",
    date: "04-20-2021",
    description: "",
  };

  const [logFormInput, setLogFormInput] = useState(logInitialState);

  const [subjectError, setSubjectError] = useState(false);
  const [descError, setDescError] = useState(false);

  const inputValidation = () => {
    if (logFormInput.subject === "") {
      setSubjectError(true);
    } else {
      setSubjectError(false);
    }
    if (logFormInput.description === "") {
      setDescError(true);
    } else {
      setDescError(false);
    }
  };

  const handleAddLog = () => {
    const nextHiddenItem = logFormInput;
    if (
      nextHiddenItem &&
      logFormInput.subject !== "" &&
      logFormInput.description !== ""
    ) {
      logFormInput.id = Math.floor(Math.random() * 1000);
      inputValidation();
      setLogs((prev) => [...prev, nextHiddenItem]);
      setLogFormInput(logInitialState);
      setLogModalOpen(false);
    } else {
      inputValidation();
      return false;
    }
  };

  const handleRemoveLog = (item) => {
    setLogs((prev) => [...prev.filter((i) => i.id !== item.id)]);
  };

  const addLogButton = (
    <Button
      variant="contained"
      onClick={handleAddLog}
      sx={{
        backgroundColor: "accent.primary",
        color: "white",
        maxWidth: "50%",
        alignSelf: "center",
        "&:hover": { backgroundColor: "accent.hover" },
      }}
    >
      Add Log
    </Button>
  );

  const handleAddLogModalClose = () => setLogModalOpen(false);
  const handleAddLogModalOpen = () => setLogModalOpen(true);

  return (
    <Box
      p={2}
      borderRadius={2}
      boxShadow={5}
      bgcolor={mode === "dark" ? "background.dark" : "background.default"}
      sx={{ display: "flex", flexDirection: "column", position: "relative" }}
    >
      <Typography
        variant="h6"
        fontWeight={400}
        mb={2}
        sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
      >
        My Logs
      </Typography>
      <IconButton
        edge="end"
        aria-label="add"
        title="Add"
        onClick={handleAddLogModalOpen}
        sx={{
          position: "absolute",
          right: "30px",
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
            {logs &&
              logs.map((item) => (
                <Collapse key={item.id} sx={{borderBottom: '0.5px solid gray'}}>
                  {renderItem({ item, handleRemoveLog })}
                </Collapse>
              ))}
          </TransitionGroup>
        </List>
      </Box>
      {logModalOpen && (
        <LogModal
          mode={mode}
          addLogButton={addLogButton}
          logModalOpen={logModalOpen}
          close={handleAddLogModalClose}
          logFormInput={logFormInput}
          setLogFormInput={setLogFormInput}
          subjectError={subjectError}
          descError={descError}
        />
      )}
    </Box>
  );
};

export default MyLogs;
