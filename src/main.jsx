import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from "./Pages/Styles/global"
import { ThemeProvider } from 'styled-components'
import  Theme  from "./Pages/Styles/theme";

import { Routes } from './Pages/Routes';

import { SignIn } from "./Pages/SignIn"
import { SignUp } from './Pages/SignUp';
import { Profile } from './Pages/Profile'



ReactDOM.createRoot(document.getElementById('root')).render(


    <React.StrictMode>

      <ThemeProvider theme={Theme}>
        
        <GlobalStyles />

        <Routes />

      </ ThemeProvider>

  </React.StrictMode>,


)
