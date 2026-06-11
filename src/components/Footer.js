'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import LanguageIcon from '@mui/icons-material/Language';
import ForumIcon from '@mui/icons-material/Forum';
import { useTheme } from '@mui/material/styles';

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0a0a0a', // Deep Black
        borderTop: '1px solid',
        borderColor: 'custom.outlineVariant',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 8 } }}>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Logo & Bio */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <img
                alt="Annai Logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA_GGlu3cLwR2FHDw_T9tMdbveVky84EqFYPfzaTHqjcwhMLatqYl8vkL1lQ0cxFK9Cnh_ibOFmNOfBUMtEhe7Z08yj-4hflVlL5rDfJcVMWLUfuKi_YuvKKi-oKNqr13w_oj8yW3MU6mfjSXZa5Hw3tfr2AGvc5O7YUsiciLaAwcAxd9Jq243B9syQiAZbRrSXmqofrE1wKOd-ojoS1tUfHbfT3kScr3kVTkvm362O4wru7HX0TbnJlL4X2BcJ1Qv2BkwE4oHwnPY"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: `1px solid ${theme.palette.custom.outlineVariant}`,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                  fontFamily: 'var(--font-playfair-display)',
                }}
              >
                ANNAI CALL DRIVERS
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'var(--font-inter)',
                color: 'text.secondary',
                lineHeight: '1.625rem',
                maxWidth: 280,
              }}
            >
              Redefining professional transportation through precision, discretion, and uncompromising quality.
            </Typography>
          </Grid>

          {/* Explore Links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: 'primary.main',
                fontFamily: 'var(--font-inter)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                mb: 3,
              }}
            >
              Explore
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link
                href="#drivers"
                sx={{
                  fontFamily: 'var(--font-inter)',
                  color: 'text.secondary',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                Our Drivers
              </Link>
              <Link
                href="#services"
                sx={{
                  fontFamily: 'var(--font-inter)',
                  color: 'text.secondary',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                Services
              </Link>
              <Link
                href="#tariff"
                sx={{
                  fontFamily: 'var(--font-inter)',
                  color: 'text.secondary',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                Tariff
              </Link>
            </Box>
          </Grid>

          {/* Working Hours / Info */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: 'primary.main',
                fontFamily: 'var(--font-inter)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                mb: 3,
              }}
            >
              Operations
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'var(--font-inter)',
                color: 'text.secondary',
                lineHeight: '1.625rem',
              }}
            >
              Available 24 Hours
              <br />
              7 Days a Week
              <br />
              All Major Cities
            </Typography>
          </Grid>

          {/* Connect Column */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: 'primary.main',
                fontFamily: 'var(--font-inter)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                mb: 3,
              }}
            >
              Connect
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'var(--font-inter)',
                color: 'text.secondary',
                mb: 3,
              }}
            >
              concierge@annai-drivers.com
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <IconButton
                sx={{
                  color: 'primary.main',
                  border: '1px solid',
                  borderColor: 'custom.outlineVariant',
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    backgroundColor: 'rgba(250, 204, 21, 0.08)',
                  },
                }}
              >
                <ShareIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                sx={{
                  color: 'primary.main',
                  border: '1px solid',
                  borderColor: 'custom.outlineVariant',
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    backgroundColor: 'rgba(250, 204, 21, 0.08)',
                  },
                }}
              >
                <LanguageIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                sx={{
                  color: 'primary.main',
                  border: '1px solid',
                  borderColor: 'custom.outlineVariant',
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    backgroundColor: 'rgba(250, 204, 21, 0.08)',
                  },
                }}
              >
                <ForumIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            pt: 4,
            borderTop: '1px solid',
            borderColor: 'custom.outlineVariant',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'var(--font-inter)',
              color: 'text.secondary',
              opacity: 0.6,
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            © 2024 ANNAI CALL DRIVERS & VALET SERVICES. ALL RIGHTS RESERVED.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
