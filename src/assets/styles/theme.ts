import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    common: {
      white: '#fff',
      black: '#000',
    },

    primary: {
      main: '#682f90',
    },
    secondary: {
      main: '#519c77',
    },
    error: {
      main: '#de1481',
    },
    warning: {
      main: '#000000',
    },
    background: {
      default: '#f2eff5',
      paper: '#ffffff',
    },
    info: {
      main: '#82afce',
    },
  },
});

export default theme;
