import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, textarea, input {
    font-family: 'Roboto', sans-serif;
    
    ${(props) => {
      return css`
        background-color: ${props.theme['gray-700']};
        color: ${props.theme.white};
      `
    }}
  }
`
