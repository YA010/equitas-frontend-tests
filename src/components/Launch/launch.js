import {Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import styles from './launch.module.css'
import moment from 'moment'

const Launch = ({launch,onClick}) => {

    return (
        <Card className={styles.card} variant='outlined' key={launch.id} >
         <CardMedia
          component="img"
          image={launch.rocket.flickr_images[1]}
        />
        <CardContent>
          
          <Typography gutterBottom variant="h5" component="div" className={styles.launchTitle}>
          {launch.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Payloads:  {launch.payloads.map((launch) => ( <>
          {launch.type} to {launch.orbit}:{launch.regime}
          <br/>
          </> ))}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Flight Number: {launch.flight_number}
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
          Launch Date: {moment(launch.date_utc).format('MMMM Do YYYY, h:mm:ss a')}
          </Typography>

        </CardContent>
        <CardActions>
          <Button onClick={() => onClick(launch.id)} size="small">Read More</Button>
          
        </CardActions>

      </Card>
    )

}

export default Launch