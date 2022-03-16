import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

console.log(bull)
export default function Labour() {
  return (
       <div style={{ display: 'flex', height: 'auto',marginTop:'5px',justifyContent:'center' }}>
    <Card sx={{ maxWidth: 475, }} color='dark'>
   <Stack
      component="form"
      sx={{
        width: '35ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
        <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
       <Button variant="contained" endIcon={<SendIcon />}>
        submit
      </Button>
   
    </Stack>
   
  </Card>
  </div>
  );
}
