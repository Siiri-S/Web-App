import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './i18n';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/styles/theme';
import { CssBaseline } from '@mui/material';
import globalStyles from './assets/styles/globalStyles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <App />
    </ThemeProvider>
  </StrictMode>
);
