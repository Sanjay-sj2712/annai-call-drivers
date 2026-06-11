import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#facc15', // Vibrant Yellow
      contrastText: '#000000',
    },
    secondary: {
      main: '#eab308',
      contrastText: '#000000',
    },
    background: {
      default: '#0a0a0a', // Deep Black
      paper: '#141313', // Surface
    },
    text: {
      primary: '#ffffff',
      secondary: '#d1d5db', // Light gray for body text
    },
    custom: {
      outlineVariant: '#262626',
      surfaceContainer: '#1c1b1b',
      surfaceContainerLow: '#171717',
      surfaceContainerLowest: '#0e0e0e',
      surfaceContainerHigh: '#262626',
      surfaceContainerHighest: '#333333',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), var(--font-montserrat), sans-serif',
    h1: {
      fontFamily: 'var(--font-playfair-display), serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'var(--font-playfair-display), serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'var(--font-playfair-display), serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'var(--font-playfair-display), serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'var(--font-playfair-display), serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'var(--font-playfair-display), serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: 'var(--font-inter), var(--font-montserrat), sans-serif',
    },
    subtitle2: {
      fontFamily: 'var(--font-inter), var(--font-montserrat), sans-serif',
    },
    body1: {
      fontFamily: 'var(--font-inter), var(--font-montserrat), sans-serif',
    },
    body2: {
      fontFamily: 'var(--font-inter), var(--font-montserrat), sans-serif',
    },
    button: {
      fontFamily: 'var(--font-inter), var(--font-montserrat), sans-serif',
      fontWeight: 600,
      letterSpacing: '0.1em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4, // 0.25rem
          textTransform: 'uppercase',
          padding: '12px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8, // 0.5rem (xl in tailwind config)
          backgroundColor: '#171717', // surfaceContainerLow
          border: '1px solid #262626', // outlineVariant
        },
      },
    },
  },
});

export default theme;
