import { Box, Card, CardMedia, Typography } from "@mui/material"

const Crew= ({launch,styles}) => {
    console.log(launch.crew)
    return (
        <Box mt={2}>
        <Typography variant="body1" className={styles.crewtitle} >Crew:</Typography>
        <Card>
      {launch.crew.map((crew) => ( <>
       <Card>
       <Typography variant="body2" >{crew.name}</Typography>
       <Typography variant="body2" >{crew.agency}</Typography>
       <CardMedia
     component="img"
     image={crew.image}
   />
       </Card>
     <br/>
     </> ))}
    
       </Card>
     </Box>
    )}

    export default Crew