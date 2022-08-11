import { Box, Typography } from "@mui/material";
import BugsList from "./BugsList";

const Bugs = ({ mode }) => {
  return (
    <Box
      p={2}
      borderRadius={2}
      boxShadow={5}
      bgcolor={mode === "dark" ? "background.dark" : "background.default"}
    >
      <Typography
        variant="h5"
        fontWeight={400}
        mb={2}
        sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
      >
        Issues
      </Typography>
      <Box height={500}>
        <BugsList />
      </Box>
      
    </Box>
  );
};

export default Bugs;
