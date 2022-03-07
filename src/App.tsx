import React from 'react';
import {
  ThemeProvider,
  createTheme,
  styled,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppRouter from './router/AppRouter';

const theme = createTheme();
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
