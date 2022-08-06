import { Box } from "@mui/material";
import PersonnelList from "./PersonnelList";

const Personnel = ({ mode }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
        <PersonnelList />
      </Box>
    </div>
  );
};

export default Personnel;
