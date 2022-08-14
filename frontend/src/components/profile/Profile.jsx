import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { getMyProfile, updateProfile } from "./ProfileService";
import { useContext } from "react";
import { AppContext } from "../../context/Context";

const user = {
  firstName: "Jan",
  lastName: "Reynolds",
  email: "jReynolds@gmail.com",
  phone: "(706) 329-1900",
  picture: "https://miro.medium.com/max/909/1*_iikfMGYF3RH4OZ0yeQYnQ.png",
};

const StyledSpan = styled("span")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "40px",
  "& .label": {
    width: "200px",
  },
});

const Profile = () => {
  const { mode } = useContext(AppContext);

  const [pic, setPic] = useState(null);
  const initialState = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    img: "",
  };
  const [formInput, setFormInput] = useState(initialState);

  const setProfile = async () => {
    let user = await getMyProfile();

    if (user) {
      setFormInput(user);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    setProfile();
  }, []);

  const handlePictureUpload = (e) => {
    // setPic(e.target.files[0])
    let temp = URL.createObjectURL(e.target.files[0]);
    setFormInput({
      ...formInput,
      img: temp,
    });
  };

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    let response = await updateProfile(formInput);

    if (!response) {
      console.log("error updating");
    }
  };

  return (
    <Box
      p={2}
      bgcolor={mode === "dark" ? "background.dark" : "background.default"}
      borderRadius="5px"
      gap={3}
      boxShadow={5}
    >
      <Typography
        variant="h5"
        mb={2}
        fontWeight={400}
        sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
      >
        Profile
      </Typography>
      <Box>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            minWidth: "50%",
          }}
        >
          <span>
            <label>Profile Image</label>
            <Avatar
              alt="name"
              src={formInput.img}
              sx={{
                width: "100px",
                height: "100px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            ></Avatar>
            <input
              type="file"
              name="img"
              style={{ marginBottom: "20px" }}
              onChange={handlePictureUpload}
            />
          </span>
          <StyledSpan>
            <label className="label">First Name</label>
            <TextField
              variant="filled"
              value={formInput.firstName}
              name="firstName"
              fullWidth
              onChange={handleChange}
            ></TextField>
          </StyledSpan>
          <StyledSpan>
            <label className="label">Last Name</label>
            <TextField
              variant="filled"
              value={formInput.lastName}
              name="lastName"
              fullWidth
              onChange={handleChange}
            ></TextField>
          </StyledSpan>
          <StyledSpan>
            <label className="label">Username</label>
            <TextField
              variant="filled"
              value={formInput.username}
              name="username"
              fullWidth
              onChange={handleChange}
            ></TextField>
          </StyledSpan>
          <StyledSpan>
            <label className="label">Email Address</label>
            <TextField
              variant="filled"
              value={formInput.email}
              name="email"
              fullWidth
              onChange={handleChange}
            ></TextField>
          </StyledSpan>
          <StyledSpan>
            <label className="label">Phone</label>
            <TextField
              variant="filled"
              value={formInput.phone}
              name="phone"
              fullWidth
              onChange={handleChange}
            ></TextField>
          </StyledSpan>
          <Button
            sx={{
              width: "200px",
              alignSelf: "center",
              bgcolor: "accent.primary",
              color: "white",
              "&:hover": { bgcolor: "accent.hover" },
            }}
            onClick={handleUpdate}
          >
            Update
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Profile;
