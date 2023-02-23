import React, {useState} from 'react'
import { TextField, Button, Box, CardContent, Card, Typography } from '@mui/material';
import './Login.css';
import './Center.css';
import Center from './Center';
import photo from '../common/warehouseIcon.png';
import useForm from '../hooks/useForm';

const getFreshModelObject = () => ({
  name: ' ',
  passwd: ' '
})
function Login() {
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange
  } = useForm(getFreshModelObject);

  return(
    <Center sx={{width: '100%'}}>
        <Card sx={{width: '400px', background: '#a9a9a9', opacity: '0.8', borderRadius: '20px'}}>
      <CardContent sx={{textAlign: 'left',}}>
        <img alt='warehouse icon' className="factoryIcon" src={photo}/>
        <Typography variant="h3" sx={{my: 3, textAlign: 'center', }}>
        Warehouse</Typography>
      <Box >
        <form noValidate className='formStyle' autoComplete='off'>
        <label for="userName">Username</label>
        <input type="text" id="userName" name="userName" onChange={handleInputChange} value={values.name} required/>
        <label for="passwd">Password</label>
        <input type="text" id="passwd" name="passwd" onChange={handleInputChange} value={values.passwd} required/>
        {/* <TextField label="Email"
         name="email"
         variant='outlined'
         className='textField'/>
         <TextField label="Password"
         name="password"
         variant='outlined'/> */}
         <Button 
         id="submitBttn"
         sx={{
          width: '90%',
         }}
         type="submit" variant="contained" color="success" size="large">
          LOGIN </Button>
        </form>
        </Box>
      </CardContent>
    </Card>
    </Center>
    
  )
}
export default Login;