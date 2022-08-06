import { Typography } from "@mui/material";
import React from "react";

const BugDetails = ({ bug }) => {
  console.log(bug);
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Typography variant="h6" fontWeight={400} align="left" mb={2}>
        Bug Details
      </Typography>
      <div style={{ display: "flex", justifyContent: 'space-between' }}>
        <div>
          <label>Title</label>
          <span>{bug.bug}</span>
        </div>
        <div>
          <label>Created</label>
          <span>{bug.created}</span>
        </div>
        <div>
          <label>Status</label>
          <span>{bug.status}</span>
        </div>
        <div>
          <label>Due By</label>
          <span>{bug.dueBy}</span>
        </div>
        <div>
          <label>Assignee</label>
          <span>{bug.assignees}</span>
        </div>
      </div>
    </div>
  );
};

export default BugDetails;
