import { Box } from "@mui/material"

const Widget = () => {
  return (
    <Box justifyContent="space-between" flex={1} sx={{display: 'flex', flexDirection: 'row', padding: '10px'}}>
        <Box>Left</Box>
        <Box>Right</Box>
    </Box>
  )
}

export default Widget