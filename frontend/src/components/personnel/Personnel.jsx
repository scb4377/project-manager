import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context/Context";
import PersonnelList from "./PersonnelList";

const Personnel = () => {
  const { mode } = useContext(AppContext);

  return (
    <Box
      p={2}
      bgcolor={mode === "dark" ? "background.dark" : "background.default"}
      gap={3}
      boxShadow={5}
      borderRadius={2}
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
  );
};

export default Personnel;
