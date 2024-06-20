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

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
`

export const ToolsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  margin-top: 4rem;

  button {
    display: flex;
    align-items: center;
    border: 0;
    border-radius: 100%;
    padding: 0.5rem;
    cursor: pointer;

    ${(props) => {
      return css`
        color: ${props.theme['gray-700']};
        background-color: ${props.theme['red-500']};
      `
    }}

    &:nth-child(2) {
      svg {
        ${(props) => {
          return css`
            fill: ${props.theme['gray-700']};
          `
        }}
      }
    }

    &:hover {
      ${(props) => {
        return css`
          background-color: ${props.theme['red-800']};
        `
      }}
    }

    &:disabled {
      background-color: ${(props) => props.theme['red-800']};
      cursor: not-allowed;
    }
  }

  a {
    display: flex;
    align-items: center;
    border-radius: 100%;
    padding: 0.5rem;

    ${(props) => {
      return css`
        color: ${props.theme['gray-700']};
        background-color: ${props.theme['red-500']};
      `
    }}

    &:hover {
      ${(props) => {
        return css`
          background-color: ${props.theme['red-800']};
        `
      }}
    }

    &.isDisabled {
      background-color: ${(props) => props.theme['red-800']};
      cursor: not-allowed;
    }
  }
`
