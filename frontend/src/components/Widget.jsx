import { Box } from "@mui/material";

const Widget = () => {
  return (
    <Box
      justifyContent="space-between"
      flex={1}
      bgcolor="background.default"
      sx={{ display: "flex", flexDirection: "row", padding: "10px", boxShadow: 2, height: '100px' }}
    >
      <Box>Left</Box>
      <Box>Right</Box>
    </Box>
  );
};

export default Widget;
