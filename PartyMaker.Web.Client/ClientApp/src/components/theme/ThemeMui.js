import { ThemeProvider } from '@mui/material'
import { green } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import React from 'react'

const ThemeMui = (props) => {
    const muiTheme = createTheme({
        palette: {
          primary: {
            main: green[500],
          },
        },
      });
      
  return <ThemeProvider theme = {muiTheme}>
      {props.children}
  </ThemeProvider>
}

export default ThemeMui