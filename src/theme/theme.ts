import { createTheme } from '@mui/material/styles';
import { MuiButtonConfig } from './button.config';
import { MuiIconButtonConfig } from './iconButton.config';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#921FED',
      contrastText: '#FCFAFA'
    },
    secondary: {
      main: '#FCFAFA',
      contrastText: '#921FED'
    },
    text: {
      primary: '#5F556D',
      secondary: '#000000'
    },
    common: {
      white: '#FFF',
      black: '#090808'
    },
    grey: {
      100: '#FBFAFC',
      300: '#E6E6E6',
      500: '#ADA7B8'
    },
    action: {
      hover: '#A239F4',
      selected: '#B568F2'
    },
    warning: {
      main: '#FFCF32'
    },
    background: {
      paper: '#F7E4A8'
    }
  },
  typography: {
    fontSize: 20,
    fontFamily: "'Dosis', sans-serif",
    fontWeightRegular: 400
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1200,
      xl: 1440
    }
  },
  components: {
    MuiButton: MuiButtonConfig,
    MuiIconButton: MuiIconButtonConfig,
    MuiTab: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});

export default theme;
