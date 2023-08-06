import React, {useState, useEffect} from 'react'; 
import { BottomNavigation, BottomNavigationAction, Grid } from '@mui/material';
import Launch from '../Launch/launch';
import LaunchDetails from "../../pages/launchdetails"
import { ArrowBackRounded, NextPlanOutlined } from '@mui/icons-material';
import styles from './launches.module.css'
const Launches = ({launches,prevPage,nextPage,currentPage,data}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedLaunch, setSelectedLaunch] = useState(null);

  useEffect(() => {
    if (selectedId) {
       const selected = launches.find(launch => launch.id === selectedId);
       setSelectedLaunch(selected);
    }
  }, [selectedId, launches]);

  const handleClick = (id) => {
    setSelectedId(id);
  }
  const handleClose = () => {
    setSelectedLaunch(null);
    setSelectedId(null)
  }
  
  return (
    <>
      {selectedLaunch ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
        <LaunchDetails launch={selectedLaunch}  close={handleClose} />  
        </Grid>
        </Grid>
      ) : (
        <>
        <BottomNavigation
          showLabels
        > 
          <BottomNavigationAction label="previous" onClick={prevPage} disabled={currentPage === 1} icon={<ArrowBackRounded />} />
          <BottomNavigationAction label="next" onClick={nextPage} disabled={currentPage === data["totalPages"]} icon={<NextPlanOutlined />} />
        </BottomNavigation>
        <Grid container spacing={2} className={styles.cards}>
         {launches.map((launch) => (
           <Grid key={launch.id} item xs={12} sm={6} md={4} >
           <Launch
             
             key={launch.id}
             props={launch}
             launch={launch}
             onClick={handleClick}
           />
           </Grid>
          
         ))}
        </Grid>
      </>)}
    </>
  )
}

export default Launches;