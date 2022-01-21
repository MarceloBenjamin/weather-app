import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import Routes from '@routes';

import { SetupInterceptors } from '@api';

import '@fontsource/montserrat';

import theme from '@theme';

import { store, persistor } from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <SetupInterceptors />

        <CssBaseline />

        <Routes />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
