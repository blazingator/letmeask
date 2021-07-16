import { createGlobalStyle } from 'styled-components'

import {theme} from './theme'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${theme.bg};
    color: ${theme.fg};
  }

  body, input, button, textarea{
    font: 400 16px 'Roboto', sans-serif;
  }
`
