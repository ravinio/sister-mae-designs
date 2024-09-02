import React from 'react';
import { Button } from '@mui/material';

const NavButton = ({ label, onClick }) => {
  return (
    <Button
      color="secondary"
      sx={{
        textTransform: 'none',
        fontWeight: 700,
        borderRadius: '6px',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Optional: add hover effect
        },
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default NavButton;
