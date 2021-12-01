import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Header from "../components/ui/Header";
import theme from './ui/Theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello.
    </ThemeProvider>
  );
}

export default App;
