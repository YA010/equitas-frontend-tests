import { 
    Typography, 
    Box, 
    Card, 
    CardContent, 
    CardMedia, 
    Link, 
    CardActions,
    Button
  } from '@mui/material';
  import styles from './launchdetails.module.css'
import moment from 'moment';
import Title from '../components/card/title';
import Rocket from '../components/card/rocket';
import Crew from '../components/card/crew';
import Capsule from '../components/card/capsule';
import Links from '../components/card/links';
import Launchpad from '../components/card/launchpad';
  const LaunchDetails = ({launch,close}) => {
    console.log(launch.crew)
    return (
      <Card className={styles.card}>

         <CardActions>
          <Button onClick={() => close()} size="small">Back</Button>
        </CardActions>

        <CardContent  className={styles.cardcontent}>
        <Title launch={launch} styles={styles}/>
     
          <Rocket launch={launch}/>

          {launch.crew[0] ? 
          <Crew launch={launch} styles={styles} /> : <></>}

          {launch.launchpad ? 
          <Launchpad launch={launch} /> : <></>}

          {launch.capsules[0] ?  
          <Capsule launch={launch} />  : <> </>}
         
         {launch.links ? 
          <Links launch={launch} />
           :<> </> }
        </CardContent>
       
        <CardMedia
          component="img"
          className={styles.imagepatch}
          image={launch.links.patch.small}
        />
        
        <CardMedia
          component="img"
          image={launch.links.flickr.original[0]}
        />
      </Card>
    );
  }

  export default LaunchDetails