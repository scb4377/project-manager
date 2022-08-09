import { Add } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ProjCommentModal from "./ProjCommentModal";

const data = [
  {
    name: "Remy Sharp",
    subject: "Brunch this weekend?",
    description: "I'll be in your neighborhood doing errands this...",
  },
  {
    name: "Remy Sharp",
    subject: "Brunch this weekend?",
    description: "I'll be in your neighborhood doing errands this...",
  },
  {
    name: "Remy Sharp",
    subject: "Brunch this weekend?",
    description: "I'll be in your neighborhood doing errands this...",
  },
  {
    name: "Remy Sharp",
    subject: "Brunch this weekend?",
    description: "I'll be in your neighborhood doing errands this...",
  },
  {
    name: "Remy Sharp",
    subject: "Brunch this weekend?",
    description: "I'll be in your neighborhood doing errands this...",
  },
  {
    name: "Remy Sharp",
    subject: "Brunch this weekend?",
    description: "I'll be in your neighborhood doing errands this...",
  },
  {
    name: "Remy Sharp",
    subject: "Brunch this weekend?",
    description: "I'll be in your neighborhood doing errands this...",
  },
  {
    name: "Remy Sharp",
    subject: "Brunch this weekend?",
    description: "I'll be in your neighborhood doing errands this...",
  },
  {
    name: "Remy Sharp",
    subject: "Brunch this weekend?",
    description: "I'll be in your neighborhood doing errands this...",
  },
  {
    name: "Remy Sharp",
    subject: "Brunch this weekend?",
    description: "I'll be in your neighborhood doing errands this...",
  },
  {
    name: "Remy Sharp",
    subject: "Brunch this weekend?",
    description: "I'll be in your neighborhood doing errands this...",
  },
  {
    name: "Remy Sharp",
    subject: "Brunch this weekend?",
    description: "I'll be in your neighborhood doing errands this...",
  },
];

const ProjCommentList = ({ mode }) => {
  const [commentModal, setCommentModal] = useState(false);

  const handleAddCommentClose = () => setCommentModal(false);
  const handleAddCommentOpen = () => setCommentModal(true);

  return (
    <Box
      p={2}
      position="relative"
      boxShadow={5}
      borderRadius="5px"
      bgcolor={mode === "dark" ? "background.dark" : "background.default"}
      sx={{ width: "100%" }}
    >
      <Typography
        mb={2}
        variant="h6"
        sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
      >
        Comments
      </Typography>

      <IconButton
        edge="end"
        aria-label="add"
        title="Add Comment"
        onClick={handleAddCommentOpen}
        sx={{
          position: "absolute",
          top: "15px",
          right: "30px",
          color: "white",
          bgcolor: "accent.primary",
          "&:hover": { bgcolor: "accent.hover" },
        }}
      >
        <Add />
      </IconButton>

      <List
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "5px",
          maxHeight: "450px",
          bgcolor: "background.dark",
          overflowY: "scroll",
        }}
      >
        {data.map((comment) => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={comment.name} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {comment.name}
                    </Typography>
                    {" - "}
                    {comment.description}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
      {commentModal && (
        <ProjCommentModal
          mode={mode}
          isCommentModalOpen={commentModal}
          commentModalClose={handleAddCommentClose}
        />
      )}
    </Box>
  );
};

export default ProjCommentList;
