import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './header.module.css'
import { RocketLaunchOutlined } from '@mui/icons-material';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.header} position="static">
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SpaceX <RocketLaunchOutlined/>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}