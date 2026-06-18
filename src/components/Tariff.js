'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

// Icons
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ExploreIcon from '@mui/icons-material/Explore';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const tariffCategories = [
  {
    title: 'Local Service',
    icon: <DirectionsCarIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
    rates: [
      { item: 'Local (First 4 Hours)', rate: '₹500' },
      { item: 'Additional', rate: '₹100/hr' },
      { item: 'Night Charge (After 10 PM)', rate: '₹100' },
      { item: 'Full Day (12 Hours)', rate: '₹1,300' },
    ],
  },
  {
    title: 'Outstation Service',
    icon: <ExploreIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
    rates: [
      { item: 'Outstation Charge', rate: '₹1,500/day' },
      { item: 'Same Day Return (12 Hours)', rate: '₹1,500' },
      { item: 'Additional', rate: '₹100/hr' },
      { item: 'Food & Allowance', rate: '₹300/day' },
      { item: 'Return Journey Charges', rate: 'Actuals' },
    ],
  },
  {
    title: 'Cab Service',
    icon: <LocalTaxiIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
    rates: [
      { item: 'Mini / Sedan (5 Hours / 50km)', rate: '₹1,500' },
      { item: 'Mini / Sedan Min (10km)', rate: '₹300' },
      { item: 'SUV Cars (5 Hours / 50km)', rate: '₹2,000' },
      { item: 'SUV Min Charge (10km)', rate: '₹400' },
      { item: 'Luxury Cars (5 Hours / 50km)', rate: '₹2,500' },
      { item: 'Luxury Min Charge (10km)', rate: '₹500' },
    ],
  },
  {
    title: 'Valet Service',
    icon: <LocalParkingIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
    rates: [
      { item: 'Valet Base (First 4 Hours)', rate: '₹600' },
      { item: 'Additional', rate: '₹100/hr' },
      { item: 'Food Allowance', rate: '₹100 (or Food)' },
    ],
  },
  {
    title: 'Packers & Movers',
    icon: <LocalShippingIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
    rates: [
      { item: 'Minimum Charge (Within City)', rate: '₹3,000' },
      { item: 'Loading Services', rate: '' },
      { item: 'Unloading Services', rate: '' },
      { item: 'Safe Packaging & Transport', rate: '' },
    ],
  },
];

export default function Tariff() {
  return (
    <Box
      id="tariff"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#0a0a0a', // Deep Black
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
            TRANSPARENT PRICING
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontFamily: 'var(--font-playfair-display)',
              fontWeight: 600,
            }}
          >
            Our Service Tariffs
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {tariffCategories.map((category) => (
            <Grid key={category.title} size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  backgroundColor: '#141313', // Surface
                  border: '1px solid',
                  borderColor: 'custom.outlineVariant',
                  borderRadius: 3,
                  transition: 'border-color 0.4s ease, box-shadow 0.4s ease, transform 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: '0 0 30px rgba(250, 204, 21, 0.1)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2.5,
                    px: 4,
                    py: 3,
                    borderBottom: '1px solid',
                    borderColor: 'custom.outlineVariant',
                    background: 'linear-gradient(135deg, rgba(20, 19, 19, 1) 0%, rgba(28, 27, 27, 1) 100%)',
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 1.5,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(250, 204, 21, 0.08)',
                      border: '1px solid rgba(250, 204, 21, 0.2)',
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontFamily: 'var(--font-playfair-display)',
                      fontWeight: 600,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {category.title}
                  </Typography>
                </Box>
                <Box sx={{ p: 4, flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                  <Table>
                    <TableBody>
                      {category.rates.map((row, index) => (
                        <TableRow
                          key={row.item}
                          sx={{
                            borderBottom: index !== category.rates.length - 1 ? '1px solid #222' : 'none',
                          }}
                        >
                          <TableCell
                            sx={{
                              borderBottom: 'none',
                              px: 0,
                              py: 2,
                              fontFamily: 'var(--font-inter)',
                              color: 'text.primary',
                              fontSize: '14px',
                              fontWeight: 500,
                            }}
                          >
                            {row.item}
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{
                              borderBottom: 'none',
                              px: 0,
                              py: 2,
                              fontFamily: 'var(--font-inter)',
                              color: 'primary.main',
                              fontSize: '16px',
                              fontWeight: 700,
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {row.rate}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="body2"
          sx={{
            mt: 6,
            textAlign: 'center',
            fontFamily: 'var(--font-inter)',
            color: 'text.secondary',
            fontSize: '12px',
            fontStyle: 'italic',
            opacity: 0.8,
          }}
        >
          * Rates may vary based on vehicle class and specific event requirements. GST extra as applicable.
        </Typography>
      </Container>
    </Box>
  );
}
