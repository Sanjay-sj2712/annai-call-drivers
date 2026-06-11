'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function ConciergeBar() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1100, // Make sure it sits above standard AppBar and footer
        display: { xs: 'block', md: 'none' },
      }}
    >
      <Button
        variant="contained"
        color="primary"
        href="#contact"
        startIcon={<CalendarTodayIcon />}
        sx={{
          borderRadius: 24, // Rounded-full
          px: 4,
          py: 2,
          fontWeight: 700,
          fontFamily: 'var(--font-inter)',
          letterSpacing: '0.1em',
          boxShadow: '0 8px 32px rgba(250, 204, 21, 0.3)',
          '&:hover': {
            boxShadow: '0 8px 32px rgba(250, 204, 21, 0.5)',
          },
        }}
      >
        Book Now
      </Button>
    </Box>
  );
}
