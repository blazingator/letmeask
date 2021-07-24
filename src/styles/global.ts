import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.fg};
  }

  body, input, button, textarea{
    font: 400 16px 'Roboto', sans-serif;
  }
`
