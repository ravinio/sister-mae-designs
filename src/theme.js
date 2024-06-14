import { createTheme } from '@mui/material/styles';

const customShadows = '0px 4px 4px rgba(147, 107, 117, 0.20)';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#ff23ed',
    },
    text: {
      primary: '#40151B',
      secondary: '#9F613E',
      disabled: 'rgba(255,255,255,.5)'
    },
    background: {
      paper: '#FFF',
      default: 'radial-gradient(97.24% 68.2% at 63.23% 57.64%, rgba(216, 191, 197, 0.5) 6.45%, rgba(181, 134, 146, 0.5) 40.11%, rgba(179, 121, 109, 0.5) 67.69%, rgba(175, 115, 104, 0.5) 78.08%, rgba(132, 65, 55, 0.5) 100%), #FFF'
    },
    // shadows: Array(25).fill(customShadows),
    shadows: {
      primary: '0px 4px 4px rgba(147, 107, 117, 0.20)'
    },
    mode: 'light',
  },
});

export default theme;