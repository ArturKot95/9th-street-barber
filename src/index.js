import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router } from 'react-router-dom';

import './index.css';

import Header from './components/Header';
import Routes from './components/Routes';
import Footer from './components/Footer';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#EDEDE5"
    },
    background: {
      default: "#f4dcb4",
      paper: "#c49664"
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: "'Playfair Display', serif"
  }
});

const App = 
<Router>
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Routes />
    <Footer />
  </MuiThemeProvider>
</Router>;

ReactDOM.render(App, document.getElementById('root'));