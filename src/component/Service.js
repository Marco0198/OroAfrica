import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import  Card  from '@mui/material/Card';


export default function Service() {

  return (
    <>
      <Box ><Card sx={{height:'600px',width:'500px',margin:2}}>
      <Typography sx={{ textAlign:'left',marginLeft:8}}  variant="h6" gutterBottom>
        Service
      </Typography>  
      <Grid container spacing={3} sx={{ width:'auto' ,margin:5}} > 
        <Grid item xs={12} >
          <TextField
            required
            id="description,"
            name="description,"
            label="Description,"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="date"
            name="date"
            label="Date"
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fingerSize"
            name="fingerSize"
            label="Finger Size"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
           required
            id="EstimatedCaratage"
            name="EstimatedCaratage"
            label="Estimated Caratage"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
        <Avatar />
          <TextField
           required
            id="image"
            name="image"
            label="Image"
            fullWidth
            type="file"
            variant="standard"
          />
        
        </Grid>
        <FormLabel sx={{ margin:3 }} component="legend">Service Type</FormLabel>
       <Grid sx={{ display:"flex" }} >
           
       <Grid sx={{ display:"flex", margin:2}} >
       <FormControlLabel 
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Service1 "
          />
          <FormControlLabel 
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Service2"
          />
          <FormControlLabel sx={{ marginRight:10,}}
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Service3"
          />
        </Grid> 
       
      </Grid></Grid>
      </Card></Box>
    </>
  );
}
