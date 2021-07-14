import { createGlobalStyle } from 'styled-components'

import {theme} from './theme'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${theme.text};
    color: ${theme.darkGrey};
  }

  body, input, button, textarea{
    font: 400 16px 'Roboto', sans-serif;
  }
`
