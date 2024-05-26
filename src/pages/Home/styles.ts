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
export const ClockContainer = styled.div`
  border-radius: 100%;
  outline-offset: 0.5rem;
  padding: 5rem 1.2rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 5rem;

  ${(props) => {
    return css`
      border: 4px solid ${props.theme.white};
      outline: 4px solid ${props.theme['red-500']};
    `
  }}
`

export const PomodoroStepContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-top: 2rem;

  & > div {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;

    ${(props) => {
      return css`
        background-color: ${props.theme.white};
      `
    }}
  }
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
  }
`
