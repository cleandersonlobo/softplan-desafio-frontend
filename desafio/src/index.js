import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#005b95'
    },
    secondary: {
      light: '#9e9e9e',
      main: '#212121',
      black: '#757575',
    },
  },
  typography: {
    useNextVariants: true,
    fontSize: 16,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
      <App />,
  </MuiThemeProvider>,
  
  document.getElementById('root'));

serviceWorker.unregister();
