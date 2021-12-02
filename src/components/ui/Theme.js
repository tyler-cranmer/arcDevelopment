import { createTheme } from '@mui/material/styles';

const godBlue = '#472DDF';
  // '#0B72B9';
const godOrange = '#FFBA60';
export default createTheme({
  palette: {
    common: {
      // blue: `${godBlue}`,
      orange: `${godOrange}`,
    },
    primary: {
      main: `${godBlue}`,
    },
    secondary: {
      main: `${godOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    logo: {
      color: `white`,
    },
  },
});