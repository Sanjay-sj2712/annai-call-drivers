'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import MovieIcon from '@mui/icons-material/Movie';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const servicesList = [
  {
    title: 'Personal Driver Service',
    icon: <MovieIcon sx={{ fontSize: 40, color: 'primary.main', mb: 3 }} />,
    description: 'Precision driving for cinematic excellence. Our drivers are trained to work seamlessly with camera crews and production schedules.',
  },
  {
    title: 'Elite Valet Parking',
    icon: <LocalParkingIcon sx={{ fontSize: 40, color: 'primary.main', mb: 3 }} />,
    description: 'High-volume, white-glove valet management for luxury hotels and private estates. We handle logistics, so you can focus on your guests.',
  },
  {
    title: 'Event & Corporate Driver Services',
    icon: <WorkspacePremiumIcon sx={{ fontSize: 40, color: 'primary.main', mb: 3 }} />,
    description: 'Sophisticated transportation for galas, red carpet events, and corporate retreats. Professionalism at every mile.',
  },
];

export default function Services() {
  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#141313', // Surface color
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'custom.outlineVariant',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 8 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              letterSpacing: '0.3em',
              fontSize: '12px',
              display: 'block',
              mb: 2,
            }}
          >
            OUR EXPERTISE
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontFamily: 'var(--font-playfair-display)',
              fontWeight: 600,
            }}
          >
            Curated Service Portfolio
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {servicesList.map((service) => (
            <Grid key={service.title} size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 5, md: 6 },
                  height: '100%',
                  backgroundColor: '#0a0a0a', // Deep Black
                  border: '1px solid',
                  borderColor: 'custom.outlineVariant',
                  borderRadius: 2,
                  transition: 'border-color 0.4s ease, box-shadow 0.4s ease, transform 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: '0 0 30px rgba(250, 204, 21, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {service.icon}
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontFamily: 'var(--font-playfair-display)',
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'var(--font-inter)',
                    color: 'text.secondary',
                    lineHeight: '1.625rem',
                  }}
                >
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
