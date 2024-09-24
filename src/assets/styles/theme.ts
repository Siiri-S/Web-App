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
      main: '#d23638',
    },
    warning: {
      main: '#000000',
    },
  },
});

export default theme;
