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
  const LaunchDetails = ({launch,close}) => {
    console.log(launch.crew)
    return (
      <Card className={styles.card}>

         <CardActions>
          <Button onClick={() => close()} size="small">Back</Button>
        </CardActions>

        <CardContent  className={styles.cardcontent}>
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

          {launch.crew[0] ? 
          <Box mt={2}>
             <Typography variant="body1" className={styles.crewtitle} >Crew:</Typography>
             <Card>
           {launch.crew.map((crew) => ( <>
            <Card>
            <Typography variant="body2" >{crew.name}</Typography>
            <Typography variant="body2" >{crew.agency}</Typography>
            <CardMedia
          component="img"
          className={styles.imagepatch}
          image={crew.image}
        />
            </Card>
          <br/>
          </> ))}
         
            </Card>
          </Box> : <></>}

          {launch.launchpad ? 
          <Box mt={2}>
            <Card>
            <Typography variant="body2" >Launchpad:</Typography>
            <Typography variant="body2" > <br/>{launch.launchpad.locality}</Typography>
            <Typography color="text.secondary" variant="body2">{launch.launchpad.details}</Typography>
            </Card>
          </Box> : <></>}

          {launch.capsules[0] ?  <Box mt={2}>
          <Card>
          <Typography variant="body2" >Capsules:</Typography>
          
           <br/>  {launch.capsules.map((capsule) => ( <>
            <Typography variant="body2" >Type:</Typography> <Typography color="text.secondary" variant="body2" >{capsule.type}</Typography>
            <Typography variant="body2" >Status:</Typography><Typography color="text.secondary" variant="body2" >{capsule.status}</Typography>
          <br/>
          </> ))}
          
          </Card>
          </Box>  : <> </>}
         
         {launch.links ? 
          <Box mt={2}>
            <Card>
              
            <Typography className='styles.links' color="text.secondary" variant="body1">Links: </Typography>

            {launch.links.youtube_id ? 
          <Box mt={2} className="styles.video-responsive">
           <iframe
   
      src={`https://www.youtube.com/embed/${launch.links.youtube_id}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
          </Box>
           :<> </> }

           <Typography className='styles.links' color="text.secondary" variant="body1">
       {launch.links.presskit ?
           <>
         <Link href={launch.links.presskit}> 
          <Button >SpaceX Press Release
             </Button>
             </Link> <br/>  </> : <></>  }
         
        {launch.links.article ?
        <>
        
         <Link href={launch.links.article}> 
          <Button >Article
             </Button>
             </Link> <br/>  </> : <></>  }
             
             {launch.links.wikipedia ?
           <>
         <Link href={launch.links.wikipedia}> 
          <Button >wikipedia
             </Button>
             </Link> <br/>  </> : <></>  }
             
             {launch.links.reddit.launch ?
           <>
         <Link href={launch.links.reddit.launch}> 
          <Button >Reddit
             </Button>
             </Link> <br/>  </> : <></>  }

           </Typography>

           </Card>
          </Box>
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