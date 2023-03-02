import React, { useEffect } from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Center from './Center'
import useForm from '../hooks/useForm'
import photo from '../common/warehouseIcon.png'
import './Login.css';

const getFreshModel = () => ({
    email: '',
    passwd: ''
})

export default function Login() {

  

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

  


    const login = e => {
        e.preventDefault();
        if(validate())
            console.log(values)
    }
    const validate = () =>{
        let temp ={}
        temp.email = (/\S+@\S+\.\S+/).test(values.email)?"":"Email is not valid."
        temp.passswd = (/^[A-Za-z]\w{7,14}$/).test(values.passswd)?"":"Password is not valid."
        setErrors(temp)
        return Object.values(temp).every(x=>x=="")
    }   


    return (
      <Center sx={{width: '100%'}}>
      <Card sx={{width: '400px', background: '#a9a9a9', opacity: '0.8', borderRadius: '20px'}}>
      <CardContent sx={{textAlign: 'left',}}>
      <img alt='warehouse icon' className="factoryIcon" src={photo}/>
      <Typography variant="h3" sx={{my: 3, textAlign: 'center', }}>
      Warehouse</Typography>
                    <Box >
                        {/* Do form validation, which is diffrent than in mui TextField, It did work but not display so user can see */}
                        <form noValidate autoComplete="off" onSubmit={login}>
                        <label for="userName">Email</label>
                        <input type="text" id="email" name="email" value={values.email} onChange={handleInputChange} {...(errors.email && {error: true, helperText: errors.email})} required/>
                        <label for="passwd">Password</label>
                        <input type="text" id="passwd" name="passwd" value={values.passwd} onChange={handleInputChange} {...(errors.passswd && {error: true, helperText: errors.passswd})} required/>
                            <Button
                                id="submitBttn"
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ width: '90%' }}>Start</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>


    )
}

{/* <Center sx={{width: '100%'}}>
<Card sx={{width: '400px', background: '#a9a9a9', opacity: '0.8', borderRadius: '20px'}}>
<CardContent sx={{textAlign: 'left',}}>
<img alt='warehouse icon' className="factoryIcon" src={photo}/>
<Typography variant="h3" sx={{my: 3, textAlign: 'center', }}>
Warehouse</Typography>
<Box >
<form noValidate className='formStyle' autoComplete='off' onSubmit={login}>
<label for="userName">Username</label>
<input type="text" id="email" name="email"  onChange={handleInputChange}  required/>
<label for="passwd">Password</label>
<input type="text" id="passwd" name="passwd"  onChange={handleInputChange}  required/>
{/* <TextField label="Email"
 name="email"
 variant='outlined'
 className='textField'/>
 <TextField label="Password"
 name="password"
 variant='outlined'/> */}
//  <Button 
//  id="submitBttn"
//  sx={{
//   width: '90%',
//  }}
//  type="submit" variant="contained" color="success" size="large">
//   LOGIN </Button>
// </form>
// </Box>
// </CardContent>
// </Card>
// </Center>

// )
// } */}