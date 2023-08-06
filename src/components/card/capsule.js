import { Box, Card, Typography } from "@mui/material"

const Capsule= ({launch}) => {
    return (
        <Box mt={2}>
          <Card>
          <Typography variant="body2" >Capsules:</Typography>
          
           <br/>  {launch.capsules.map((capsule) => ( <>
            <Typography variant="body2" >Type:</Typography> <Typography color="text.secondary" variant="body2" >{capsule.type}</Typography>
            <Typography variant="body2" >Status:</Typography><Typography color="text.secondary" variant="body2" >{capsule.status}</Typography>
          <br/>
          </> ))}
          
          </Card>
          </Box> 
    )}

    export default Capsule