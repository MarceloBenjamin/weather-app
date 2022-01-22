import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: false;
    md: true;
    lg: true;
    xl: false;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#4c515b',
      light: '#9aa5c0',
    },
    secondary: {
      main: '#b47c4a',
    },
    info: {
      main: '#918e94',
      light: '#cfc3bd',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      md: 600,
      lg: 1200,
    },
    unit: 'px',
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '15px !important',
        },
      },
    },
  },
});

export default theme;
