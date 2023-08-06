import { Box, Button, Card, Link, Typography } from "@mui/material"

const Links= ({launch}) => {
    return (
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
    )}

    export default Links