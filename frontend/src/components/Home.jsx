import { Box } from "@mui/material"
import Widget from "./Widget"

const Home = () => {
  return (
    <Box flex={6} p={2} gap={10} sx={{display: 'flex'}}>
        <Widget />
        <Widget />
        <Widget />
    </Box>
  )
}

export default Home