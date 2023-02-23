/* eslint-disable react/jsx-no-undef */
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme } from '@mui/material/styles';



const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
})
ReactDOM.render(
    <App/>,
    document.getElementById("root")
    )