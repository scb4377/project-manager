import { Box, Typography } from "@mui/material";
import PersonnelList from "./PersonnelList";

const Personnel = ({ mode }) => {
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Box
        m={2}
        mr={3}
        p={2}
        bgcolor={mode === "dark" ? "background.dark" : "background.light"}
        borderRadius="5px"
        gap={3}
        boxShadow={5}
      >
        <Typography
          mb={2}
          fontWeight={400}
          variant="h6"
          sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
        >
          Teams
        </Typography>
        <PersonnelList mode={mode} />
      </Box>
    </Box>
  );
};

export default Personnel;
