import { Box, Button, IconButton, Modal, TextField, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import React from "react";

const ProjCommentModal = ({ isCommentModalOpen, commentModalClose }) => {
  return (
    <Modal
      open={isCommentModalOpen}
      onClose={commentModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        p={2}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "max-content",
          width: {xs: "95%", sm: "400px"},
          bgcolor: "background.default",
          borderRadius: "5px",
          boxShadow: 24,
        }}
      >
        <Typography
          mb={2}
          position="relative"
          variant="h5"
          fontWeight={400}
          sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
        >
          Add Comment
        </Typography>

        <IconButton
            color="error"
            sx={{ position: "absolute", right: "5px", top: '5px' }}
            onClick={commentModalClose}
          >
            <CancelIcon />
          </IconButton>

        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          justifyContent="space-evenly"
        >
          <TextField
            required
            multiline
            id="comment-subject"
            variant="filled"
            label="Subject"
            name="subject"
            fullWidth
          ></TextField>
          <TextField
            required
            multiline
            id="comment-description"
            variant="filled"
            label="Write something..."
            name="description"
            fullWidth
          ></TextField>
          <Button
            variant="contained"
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
        </Box>
      </Box>
    </Modal>
  );
};

export default ProjCommentModal;
