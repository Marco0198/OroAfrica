import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Person from './Person';
import Service from './Service';
import  Grid from '@mui/material/Grid';
import  Button  from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
const drawerWidth = '100%';
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box >
      <CssBaseline />
     
      <Button
            variant="contained"
            color="error"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ ml: 10, ...(open && { display: 'none' }),marginLeft:10,margin:5}}
          >
            create person && service
          </Button>
      <Drawer
        sx={{
          width: 3,
          alignItems:'left',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="bottom"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <CloseIcon  /> : <CloseIcon  />}
          </IconButton>
        </DrawerHeader>
        <Box sx={{ width: '100%', height:'50',justifyContent:'center' ,display:'flex'}}>
      <Grid container  sx={{ justifyContent:'center',display:'flex',width: '70%'}}>
        <Grid item xs={6}>
        <Person />
        </Grid>
        <Grid item xs={6}>
        <Service />
        </Grid>
        
      </Grid>
    </Box>
       
      </Drawer>
      
     
    </Box>
  );
}
