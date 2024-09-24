import { GlobalStyles } from '@mui/material';
const globalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      html: {
        height: '100%',
      },
      body: {
        margin: 0,
        padding: theme.spacing(10),
        backgroundColor: theme.palette.background,
        height: '100%',
      },
    })}
  />
);

export default globalStyles;
