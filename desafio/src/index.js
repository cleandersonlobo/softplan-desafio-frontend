import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import theme from './config/theme';

ReactDOM.render(
  
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>,
  
  document.getElementById('root'));

serviceWorker.unregister();
