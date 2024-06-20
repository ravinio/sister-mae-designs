import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import theme from './theme';

const globalStyles = (
  <GlobalStyles
    styles={{
      body: {
        background: `${theme.palette.background.default} !important`,
        boxSizing: 'border-box',
        minHeight: '100vh'
      },
    }}
  />
);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {globalStyles}
    <App />
  </ThemeProvider>,
);
