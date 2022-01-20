import React from 'react';

import Routes from '@routes';

import { SetupInterceptors } from '@api';

import { CssBaseline, ThemeProvider } from '@mui/material';

import '@fontsource/montserrat';
import theme from '@theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <SetupInterceptors />

    <CssBaseline />

    <Routes />
  </ThemeProvider>
);

export default App;
