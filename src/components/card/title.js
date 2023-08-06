import { Box, Card, Typography } from "@mui/material"
import moment from "moment"
const Title = ({launch}) => {
    console.log(launch.crew)
    return (
    <Box mt={2}>

            <Card>
            <Typography variant="body2" >Name: {launch.name}</Typography>
            <Typography  variant="body2" >Launch Time: </Typography>
          <Typography color="text.secondary" variant="body2">{moment(launch.date_utc).format('MMMM Do YYYY, h:mm:ss a')}</Typography>
          <Typography  variant="body2" >Destination: </Typography>
          <Typography color="text.secondary" variant="body2" > {launch.payloads.map((launch) => ( <>
          {launch.type} to {launch.orbit}:{launch.regime}
          
          </> ))}</Typography> 
         
            </Card>

          </Box>
    )}

    export default Title