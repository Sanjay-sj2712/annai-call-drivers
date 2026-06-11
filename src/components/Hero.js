'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function Hero() {
  return (
    <Box
      component="header"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 10,
        overflow: 'hidden',
        backgroundColor: '#0a0a0a',
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="/banner.png"
        alt="Hero Background"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'grayscale(20%)',
          zIndex: 0,
        }}
      />
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 100%)',
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          px: { xs: 3, md: 8 },
        }}
      >
        <Grid container>
          <Grid size={{ xs: 12, md: 8, lg: 7 }}>
            <Typography
              component="h1"
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: { xs: '3rem', md: '4.5rem' },
                fontFamily: 'var(--font-playfair-display)',
                fontWeight: 700,
                color: 'text.primary',
                mb: 3,
              }}
            >
              Top-Quality Driving &{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                Valet Excellence
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: '1.75rem',
                fontFamily: 'var(--font-inter)',
                color: 'text.secondary',
                mb: 5,
                maxWidth: 540,
              }}
            >
              Trusted by film productions, luxury hotels, and elite events, Annai Call Drivers delivers bespoke driving solutions with precision, discretion, and professionalism where reputation matters most.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 3,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                href="#contact"
                className="yellow-glow"
                sx={{
                  py: 2.2,
                  px: 5,
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Book Your Driver
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href="#services"
                sx={{
                  py: 2,
                  px: 5,
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  fontFamily: 'var(--font-inter)',
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: 'rgba(250, 204, 21, 0.08)',
                  },
                }}
              >
                Our Experience
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
