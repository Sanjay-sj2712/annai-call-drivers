'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Contact() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#141313', // Surface
        borderTop: '1px solid',
        borderColor: 'custom.outlineVariant',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 3, md: 8 } }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontFamily: 'var(--font-playfair-display)',
            fontWeight: 600,
            mb: 3,
          }}
        >
          Inquiry for Elite Services
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'var(--font-inter)',
            color: 'text.secondary',
            fontSize: { xs: '1rem', md: '1.125rem' },
            lineHeight: '1.75rem',
            mb: 6,
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          Connect with our executive coordinators at Annai to discuss your upcoming project or event requirements. We are available 24/7 for immediate bookings.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            gap: 3,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="tel:+919876543210" // Example placeholder phone
            startIcon={<PhoneIcon />}
            className="yellow-glow"
            sx={{
              py: 2.2,
              px: 6,
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.1em',
              fontFamily: 'var(--font-inter)',
            }}
          >
            Call Now
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component="a"
            href="https://wa.me/919876543210" // Example placeholder whatsapp
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<WhatsAppIcon />}
            sx={{
              py: 2,
              px: 6,
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.1em',
              fontFamily: 'var(--font-inter)',
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2,
                backgroundColor: 'rgba(250, 204, 21, 0.08)',
              },
            }}
          >
            Chat on WhatsApp
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
