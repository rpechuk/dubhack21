import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ClassNames } from '@emotion/react';
import { fontWeight } from '@mui/system';
import logo from './img_logo.png';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#E67E00'}} >
        <Toolbar>
          <img src={logo} alt="logo" width="99" height = {(window.innerHeight * 0.09) + 'px'}/>
          <Typography style={{ flexGrow: 6}}></Typography>
          <Button color="inherit" variant="outlined">
            <Typography variant="h7" style={{fontWeight: 200}}>About us</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
