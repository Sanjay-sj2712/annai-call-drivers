'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MapIcon from '@mui/icons-material/Map';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';

const driverCategories = [
  {
    title: 'Outstation Drivers',
    icon: <MapIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    image: '/outstation.png',
    description: 'Experienced long-distance specialists for your inter-city travels. Safe, reliable, and knowledgeable of major highways and routes.',
    bullets: [
      '24/7 Availability for long trips',
      'Verified & Background checked',
      'Comfortable with all vehicle types',
    ],
    link: '#tariff',
  },
  {
    title: 'Local Drivers',
    icon: <LocationCityIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    image: '/local.png',
    description: 'Professional drivers for your daily city needs. Whether it\'s office commutes or shopping trips, we ensure a stress-free journey.',
    bullets: [
      'Punctual & Professional etiquette',
      'Hourly or Daily packages',
      'Deep local traffic knowledge',
    ],
    link: '#tariff',
  },
];

export default function Drivers() {
  const theme = useTheme();

  return (
    <Box
      id="drivers"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 8 } }}>
        <Grid container spacing={4}>
          {driverCategories.map((cat, idx) => (
            <Grid key={cat.title} size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.4s ease, transform 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden', height: 260 }}>
                  <CardMedia
                    component="img"
                    image={cat.image}
                    alt={cat.title}
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(15%)',
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.35)',
                    }}
                  />
                </Box>
                <CardContent sx={{ p: { xs: 4, md: 6 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 3 }}>
                    {cat.icon}
                  </Box>
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      fontFamily: 'var(--font-playfair-display)',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {cat.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: '1.625rem',
                      mb: 4,
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {cat.description}
                  </Typography>
                  <List sx={{ mb: 4, p: 0, flexGrow: 1 }}>
                    {cat.bullets.map((bullet) => (
                      <ListItem key={bullet} sx={{ px: 0, py: 0.8 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={bullet}
                          primaryTypographyProps={{
                            sx: {
                              fontFamily: 'var(--font-inter)',
                              color: 'text.secondary',
                              fontSize: '14px',
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    component="a"
                    href={cat.link}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      alignSelf: 'flex-start',
                      p: 0,
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      fontSize: '12px',
                      color: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'primary.light',
                        '& .MuiButton-endIcon': {
                          transform: 'translateX(4px)',
                        },
                      },
                      '& .MuiButton-endIcon': {
                        transition: 'transform 0.2s ease',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
