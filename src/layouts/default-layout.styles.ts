import { css, styled } from 'styled-components'

export const LayoutDefault = styled.div`
  max-width: 1120px;
  margin: 6rem auto;
  padding: 2rem;
  border-radius: 1.5rem;

  ${(props) => {
    return css`
      background-color: ${props.theme['gray-700']};
    `
  }}
`
