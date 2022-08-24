import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/Context";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createBug } from "./AddBug";
import { toast } from 'react-toastify'

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [value, setValue] = useState(null);
  const { projList, mode, user, pullBugs, open, setOpen } =
    useContext(AppContext);
  const initialState = {
    creator: user.id,
    issue: "",
    priority: 1,
    dueBy: value,
    description: "",
    projId: "",
    teamId: "62f6b2e9eb86a1acd86885c1",
  };
  const [formInput, setFormInput] = useState(initialState);

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const myAsyncFunc = async () => {
    setOpen(false);
    setFormInput(initialState);
    const resp = await createBug(formInput);

    if (resp) {
      await pullBugs();
      toast.success("Created Bug", { position: toast.POSITION.BOTTOM_RIGHT });
    } else {
      toast.error("Error Creating Bug", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const handleSubmit = () => {
    const { creator, issue, priority, dueBy, description, projId, teamId } =
      formInput;

    if (
      creator === "" ||
      issue === "" ||
      priority === "" ||
      dueBy === "" ||
      description === "" ||
      projId === "" ||
      teamId === ""
    ) {
      console.log("error");
    } else {
      myAsyncFunc();
    }
  };

  return (
    <>
      {/* <Tooltip
          onClick={(e) => setOpen(true)}
          title="Add Bug"
        >
          <Fab aria-label="add">
            <AddIcon  />
          </Fab>
        </Tooltip> */}
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-desc"
      >
        <Box
          width={400}
          height="max-content"
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          gap={2}
          borderRadius={5}
          display="flex"
          flexDirection="column"
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Bug
          </Typography>
          <UserBox>
            <Avatar
              alt={user.firstName + " " + user.lastName}
              src={user.img}
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              {user.firstName + " " + user.lastName}
            </Typography>
          </UserBox>
          <TextField
            required
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            label="Issue"
            variant="filled"
            name="issue"
            onChange={handleChange}
          />
          <TextField
            required
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            label="Description"
            variant="filled"
            name="description"
            onChange={handleChange}
          />
          <FormControl
            fullWidth
            sx={{
              bgcolor: mode === "dark" ? "background.dark" : "background.light",
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              variant="standard"
              size="small"
            >
              Priority
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formInput.priority}
              name="priority"
              onChange={handleChange}
              variant="filled"
            >
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Minor</MenuItem>
              <MenuItem value={3}>Major</MenuItem>
              <MenuItem value={4}>Critical</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{
              bgcolor:
                mode === "dark" ? "background.dark" : "background.default",
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              variant="standard"
              size="small"
            >
              Project
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant="filled"
              value={formInput.projId}
              name="projId"
              onChange={handleChange}
            >
              {projList.map((proj) => (
                <MenuItem key={proj.id} value={proj.id}>
                  {proj.projTitle}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{
              bgcolor:
                mode === "dark" ? "background.dark" : "background.default",
            }}
          >
            {/* <InputLabel
                id="demo-simple-select-label"
                variant="standard"
                size="small"
              >
                Team
              </InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formInput.teamId}
                name="teamId"
                onChange={handleChange}
              >
                {teamList.map((team) => (
                  <MenuItem key={team._id} value={team._id}>
                    {team.teamName}
                  </MenuItem>
                ))}
              </Select> */}
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Due By"
              value={formInput.dueBy}
              name="dueBy"
              variant="filled"
              onChange={(newValue) => {
                setFormInput({
                  ...formInput,
                  dueBy: newValue,
                });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {/* <Stack direction="row" gap={1} mt={2} mb={3}>
              <EmojiEmotionsIcon color="primary" />
              <ImageIcon color="secondary" />
              <VideoCameraBackIcon color="success" />
              <PersonAddIcon color="error" />
            </Stack> */}
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={handleSubmit}>Post</Button>
            {/* <Button sx={{ width: "100px" }}>
                <DateRange />
              </Button> */}
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
