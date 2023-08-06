import { Box, Card, CardMedia, Typography } from "@mui/material"

const Rocket = ({launch}) => {
    console.log(launch.crew)
    return (
        <Box mt={2}>
        <Card>
        <Typography  variant="body2">Rocket:</Typography>
        <CardMedia
      component="img"
      image={launch.rocket.flickr_images[0]}
    />
        <Typography >Name: {launch.rocket.name}</Typography>
         <Typography color="text.secondary">Size: {launch.rocket.height.meters}m tall, {launch.rocket.diameter.meters}m wide and weighs {launch.rocket.mass.kg.toLocaleString('en-US')}kg</Typography>
         <Typography color="text.secondary">{launch.rocket.description}</Typography>
         </Card>
      </Box>
    )}

    export default Rocket