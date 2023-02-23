import React from 'react'
import { Grid } from '@mui/material';
import './Center.css'
function Center(props) {
  return (
    <Grid container
        className='backgroundClass'
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{minHeight:'100vh'}}>
        <Grid item xs={1}>
            {props.children}
        </Grid>
    </Grid>
  )
}
export default Center;
