import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#005b95'
    },
    secondary: {
      light: '#9e9e9e',
      main: '#7b7b7b',
      black: '#757575',
    },
  },
  typography: {
    useNextVariants: true,
    fontSize: 16,
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
});

export default theme;