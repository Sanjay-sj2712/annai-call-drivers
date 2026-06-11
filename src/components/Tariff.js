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

const localRates = [
  { item: 'Base Fare (First 4 Hours)', rate: '₹500' },
  { item: 'Hourly Extra', rate: '₹100/hr' },
  { item: 'Night Charge (After 10 PM)', rate: '₹200' },
  { item: 'Full Day (12 Hours)', rate: '₹1,200' },
];

const outstationRates = [
  { item: 'Per Day Driver Charge', rate: '₹1,500' },
  { item: 'Food & Allowance', rate: '₹500/day' },
  { item: 'Return Journey Charge', rate: 'Actuals' },
  { item: 'Minimum Duration', rate: '24 Hours' },
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
          {/* Local Rates */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                overflow: 'hidden',
                backgroundColor: '#141313', // Surface
                border: '1px solid',
                borderColor: 'custom.outlineVariant',
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: 'primary.main',
                  py: 2.5,
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'primary.contrastText',
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  Local Service Rates
                </Typography>
              </Box>
              <Box sx={{ p: 4 }}>
                <Table>
                  <TableBody>
                    {localRates.map((row, index) => (
                      <TableRow
                        key={row.item}
                        sx={{
                          borderBottom: index !== localRates.length - 1 ? '1px solid #262626' : 'none',
                        }}
                      >
                        <TableCell
                          sx={{
                            borderBottom: 'none',
                            px: 0,
                            py: 2.5,
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
                            py: 2.5,
                            fontFamily: 'var(--font-inter)',
                            color: 'primary.main',
                            fontSize: '16px',
                            fontWeight: 700,
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

          {/* Outstation Rates */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                overflow: 'hidden',
                backgroundColor: '#141313', // Surface
                border: '1px solid',
                borderColor: 'custom.outlineVariant',
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: 'primary.main',
                  py: 2.5,
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'primary.contrastText',
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  Outstation Service Rates
                </Typography>
              </Box>
              <Box sx={{ p: 4 }}>
                <Table>
                  <TableBody>
                    {outstationRates.map((row, index) => (
                      <TableRow
                        key={row.item}
                        sx={{
                          borderBottom: index !== outstationRates.length - 1 ? '1px solid #262626' : 'none',
                        }}
                      >
                        <TableCell
                          sx={{
                            borderBottom: 'none',
                            px: 0,
                            py: 2.5,
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
                            py: 2.5,
                            fontFamily: 'var(--font-inter)',
                            color: 'primary.main',
                            fontSize: '16px',
                            fontWeight: 700,
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
        </Grid>

        <Typography
          variant="body2"
          sx={{
            mt: 4,
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
