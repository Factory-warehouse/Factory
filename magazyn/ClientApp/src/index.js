/* eslint-disable react/jsx-no-undef */
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme } from '@mui/material/styles';


const root = ReactDOM.createRoot(document.getElementById("root"));
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
})

root.render(<App/>);