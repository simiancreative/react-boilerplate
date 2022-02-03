import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as locales from '@mui/material/locale';

import 'assets/styles/globals.scss';

const theme = {
  palette: {
    mode: 'dark',
    type: 'dark',
    primary: {
      main: '#00e2a1'
    },
    secondary: {
      main: '#112538'
    },
    text: {
      primary: '#feffff'
    },
    background: {
      default: '#001033',
      paper: '#001033'
    }
  },
  typography: {
    fontSize: 13,
    fontFamily: ['Poppins'].join(',')
  }
};

export default function AppTheme(props) {
  const builtTheme = createTheme(theme, locales[props.locale]);
  // console.log(builtTheme);

  return <ThemeProvider theme={builtTheme}>{props.children}</ThemeProvider>;
}
