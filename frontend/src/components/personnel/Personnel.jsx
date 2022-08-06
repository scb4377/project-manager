import { Box, Typography } from "@mui/material";
import PersonnelList from "./PersonnelList";

const Personnel = ({ mode }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginRight: '8px' }}>
      <Box
        p={2}
        m={2}
        mr={3}
        bgcolor={mode === "dark" ? "background.dark" : "background.light"}
        borderRadius="5px"
        gap={3}
        boxShadow={5}
      >
        hello
      </Box>
      <Box
        m={2}
        mr={3}
        bgcolor={mode === "dark" ? "background.dark" : "background.light"}
        borderRadius="5px"
        gap={3}
        boxShadow={5}
      >
        <Typography pt={2} pl={2} mb={2} fontWeight={400} variant="h6">
          Teams
        </Typography>
        <PersonnelList mode={mode} />
      </Box>
    </div>
  );
};

export default Personnel;
