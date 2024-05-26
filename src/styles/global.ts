import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin-inline: 1rem;

    ${(props) => {
      return css`
        background-color: ${props.theme['red-800']};
      `
    }}
  }

  body, button, textarea, input {
    font-family: 'Roboto', sans-serif;
    
    ${(props) => {
      return css`
        color: ${props.theme.white};
      `
    }}
  }
`
