import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  styled,
  TextField,
  Typography,
} from "@mui/material";

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

const Profile = ({ mode }) => {
  const [pic, setPic] = useState(null);

  const handlePictureUpload = (e) => {
    // setPic(e.target.files[0])
    // let temp = URL.createObjectURL(e.target.files[0])
    setPic(e.target.files[0]);
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
              src={pic !== null ? URL.createObjectURL(pic) : user.picture}
              sx={{
                width: "100px",
                height: "100px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            ></Avatar>
            <input
              type="file"
              name="picture"
              style={{ marginBottom: "20px" }}
              onChange={handlePictureUpload}
            />
          </span>
          <StyledSpan>
            <label className="label">First Name</label>
            <TextField
              variant="filled"
              value={user.firstName}
              fullWidth
            ></TextField>
          </StyledSpan>
          <StyledSpan>
            <label className="label">Last Name</label>
            <TextField
              variant="filled"
              value={user.lastName}
              fullWidth
            ></TextField>
          </StyledSpan>
          <StyledSpan>
            <label className="label">Email Address</label>
            <TextField
              variant="filled"
              value={user.email}
              fullWidth
            ></TextField>
          </StyledSpan>
          <StyledSpan>
            <label className="label">Phone</label>
            <TextField
              variant="filled"
              value={user.phone}
              fullWidth
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
          >
            Update
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Profile;
