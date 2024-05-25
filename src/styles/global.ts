import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin-inline: 1rem;
  }

  body, button, textarea, input {
    font-family: 'Roboto', sans-serif;
    
    ${(props) => {
      return css`
        background-color: ${props.theme['red-800']};
        color: ${props.theme.white};
      `
    }}
  }
`
