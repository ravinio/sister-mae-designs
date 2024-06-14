import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
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
      paper: '#ff23ed',
      default: 'radial-gradient(97.24% 68.2% at 63.23% 57.64%, rgba(216, 191, 197, 0.35) 6.45%, rgba(181, 134, 146, 0.35) 40.11%, rgba(179, 121, 109, 0.35) 67.69%, rgba(175, 115, 104, 0.35) 78.08%, rgba(132, 65, 55, 0.35) 100%), #FFF'
    }
  },
});

export default theme;