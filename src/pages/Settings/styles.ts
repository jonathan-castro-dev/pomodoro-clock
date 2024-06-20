import { css, styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.6rem;
  }

  a {
    border-bottom: 2px solid transparent;

    ${(props) => {
      return css`
        color: ${props.theme.white};
      `
    }}

    &:hover {
      ${(props) => {
        return css`
          border-color: ${props.theme['red-500']};
        `
      }}
    }
  }
`
