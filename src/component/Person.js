import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';


export default function Person() {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Person
      </Typography>
      <Grid container spacing={3}>
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
        <Grid item xs={12}>
          <TextField
            id="telephone"
            name="telephone"
            label="Telephone"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
            id="account"
            name="account"
            label="Account"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <FormLabel sx={{ margin:3 }} component="legend">Assign responsibility</FormLabel>
       <Box sx={{ display:"flex" ,justifyContent:"center"}} >
           <FormGroup>
       

        <Grid item xs={12} m={6}>
            

          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="deposit"
          />
        </Grid>
        <Grid item xs={12} m={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="EFt"
          />
        </Grid> <Grid item xs={12} m={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="cash"
          />
        </Grid>
        </FormGroup></Box> 
       
      </Grid>
    </React.Fragment>
  );
}
