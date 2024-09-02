import { createTheme } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#B88073',
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
    shadows: {
      primary: '0px 4px 4px rgba(147, 107, 117, 0.20)'
    },
    mode: 'light',
  },
  typography: {
    fontFamily: '"Bellota Text", sans-serif',
  }
});

theme = createTheme(theme, {
  typography: {
    h1: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '34px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '48px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '60px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '72px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '96px',
      },
      fontWeight: 700,
      color:  theme.palette.text.primary,
      lineHeight: 'normal',
    },
    h2: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '24px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '36px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '48px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '60px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '72px',
      },
      fontWeight: 700,
      color:  theme.palette.text.primary,
      lineHeight: 'normal',
    },
    h3: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '20px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '24px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '32px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '40px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '48px',
      },
      fontWeight: 700,
      color:  theme.palette.text.primary,
      lineHeight: 'normal',
    },
    h4: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '20px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '24px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '32px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '34px',
      },
      fontWeight: 700,
      color:  theme.palette.text.primary,
      lineHeight: 'normal',
    },
    h5: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '16px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '20px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '24px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '24px',
      },
      fontWeight: 700,
      color:  theme.palette.text.primary,
      lineHeight: 'normal',
    },
    h6: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '12px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '20px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '24px',
      },
      fontWeight: 700,
      color:  theme.palette.text.primary,
      lineHeight: 'normal',
    },
    subtitle1: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '16px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '20px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '24px',
      },
      fontWeight: 400,
      color:  theme.palette.text.secondary,
      lineHeight: 'normal',
    },
    subtitle2: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '12px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '20px',
      },
      fontWeight: 400,
      color:  theme.palette.text.secondary,
      lineHeight: 'normal',
    },
    body1: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '16px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '20px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '24px',
      },
      fontWeight: 400,
      color:  theme.palette.text.primary,
      lineHeight: 'normal',
    },
    body2: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '12px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '20px',
      },
      fontWeight: 400,
      color:  theme.palette.text.primary,
      lineHeight: 'normal',
    },
    caption: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '10px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '12px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '16px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '18px',
      },
      fontWeight: 400,
      color:  theme.palette.text.secondary,
      lineHeight: 'normal',
    },
  }
});

export default theme;