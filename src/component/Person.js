import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import SearchBar from './SearchBar';
import Card  from '@mui/material/Card';


export default function Person() {

  return (
    <>
  
      <Box ><Card sx={{height:'600px',width:'500px',margin:3}}>
      <Typography sx={{ textAlign:'left',margin:1}} variant="h6" gutterBottom>
        Person
      </Typography>
      <Grid container spacing={3} sx={{ width:'auto',margin:5}} >
      <Grid item xs={12}>
      <SearchBar />
     </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
    
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="emaol"
            name="email"
            label="email"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           required
            id="telephone"
            name="telephone"
            label="Telephone"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
           required
            id="account"
            name="account"
            label="Account"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
        <FormLabel sx={{ marginTop:3,marginLeft:3 }} component="legend">Payement Methods</FormLabel>
       <Grid sx={{ display:"flex", margin:2}} >
       <FormControlLabel 
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="DEPOSIT "
          />
          <FormControlLabel 
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="EFT"
          />
          <FormControlLabel sx={{ marginRight:10,}}
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="TRANSFER"
          />
        </Grid> 
      </Grid> 
      </Card> 
      </Box>
    </>
  );
}
