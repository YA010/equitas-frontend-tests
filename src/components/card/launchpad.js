import { Box, Card, Typography } from "@mui/material"

const Launchpad = ({launch}) => {
    console.log(launch.crew)
    return (
        <Box mt={2}>
        <Card>
        <Typography variant="body2" >Launchpad:</Typography>
        <Typography variant="body2" > <br/>{launch.launchpad.locality}</Typography>
        <Typography color="text.secondary" variant="body2">{launch.launchpad.details}</Typography>
        </Card>
      </Box>
    )}

    export default Launchpad