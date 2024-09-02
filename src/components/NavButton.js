import React from 'react';
import { Button, useTheme } from '@mui/material';

const NavButton = ({ label, onClick }) => {   
  const theme = useTheme();

  return (
    <Button
      color="secondary"
      sx={{
        textTransform: 'none',
        fontWeight: 700,
        borderRadius: '6px',
        position: 'relative',
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0)'
        },
        '&:hover::after': {
          width: '100%',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 0,
          height: '2px',
          backgroundColor: 'currentColor',
          transition: 'width 0.3s ease',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '34px',
        }
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default NavButton;
