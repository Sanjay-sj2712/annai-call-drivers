'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';

const navItems = [
  { label: 'Drivers', href: '#drivers' },
  { label: 'Services', href: '#services' },
  { label: 'Tariff', href: '#tariff' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        height: '100%',
        backgroundColor: 'background.default',
        color: 'text.primary',
        pt: 4,
        px: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton sx={{ color: 'primary.main' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4, gap: 1.5 }}>
        <img
          alt="Annai Call Drivers Logo"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA_GGlu3cLwR2FHDw_T9tMdbveVky84EqFYPfzaTHqjcwhMLatqYl8vkL1lQ0cxFK9Cnh_ibOFmNOfBUMtEhe7Z08yj-4hflVlL5rDfJcVMWLUfuKi_YuvKKi-oKNqr13w_oj8yW3MU6mfjSXZa5Hw3tfr2AGvc5O7YUsiciLaAwcAxd9Jq243B9syQiAZbRrSXmqofrE1wKOd-ojoS1tUfHbfT3kScr3kVTkvm362O4wru7HX0TbnJlL4X2BcJ1Qv2BkwE4oHwnPY"
          style={{ width: 40, height: 40, borderRadius: '50%' }}
        />
        <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 700, fontFamily: 'var(--font-playfair-display)' }}>
          ANNAI CALL DRIVERS
        </Typography>
      </Box>
      <List sx={{ mb: 4 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component="a"
              href={item.href}
              sx={{
                textAlign: 'center',
                py: 2,
                borderRadius: 1,
                '&:hover': {
                  color: 'primary.main',
                  backgroundColor: 'rgba(250, 204, 21, 0.08)',
                },
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-inter)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontSize: '14px',
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        size='small'
        href="#contact"
        sx={{
          py: 1.5,
          fontWeight: 700,
          fontFamily: 'var(--font-inter)',
          letterSpacing: '0.1em',
        }}
      >
        Book Now
      </Button>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid',
          borderColor: 'custom.outlineVariant',
          backgroundImage: 'none',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            height: 80,
            maxWidth: 1300,
            width: '100%',
            mx: 'auto',
            px: { xs: 3, md: 8 },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <img
              alt="Annai Call Drivers Logo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA_GGlu3cLwR2FHDw_T9tMdbveVky84EqFYPfzaTHqjcwhMLatqYl8vkL1lQ0cxFK9Cnh_ibOFmNOfBUMtEhe7Z08yj-4hflVlL5rDfJcVMWLUfuKi_YuvKKi-oKNqr13w_oj8yW3MU6mfjSXZa5Hw3tfr2AGvc5O7YUsiciLaAwcAxd9Jq243B9syQiAZbRrSXmqofrE1wKOd-ojoS1tUfHbfT3kScr3kVTkvm362O4wru7HX0TbnJlL4X2BcJ1Qv2BkwE4oHwnPY"
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                border: `1px solid ${theme.palette.custom.outlineVariant}`,
              }}
            />
            <Typography
              variant="h5"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-playfair-display)',
                userSelect: 'none',
                fontSize: { xs: '15px', sm: '18px', md: '24px' }, // Responsive size for mobile
              }}
            >
              ANNAI CALL DRIVERS
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 6 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                sx={{
                  color: 'text.primary',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              href="#contact"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontFamily: 'var(--font-inter)',
                letterSpacing: '0.1em',
              }}
            >
              Book Now
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: 'primary.main' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, backgroundImage: 'none' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
