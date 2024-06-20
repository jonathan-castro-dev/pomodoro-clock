import { css, styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;

  h1 {
    font-size: 1.6rem;
  }

  a {
    border-bottom: 2px solid transparent;

    ${(props) => css`
      color: ${props.theme.white};
    `}

    &:hover {
      ${(props) => css`
        border-color: ${props.theme['red-500']};
      `}
    }
  }
`

export const HistoryList = styled.div`
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-500']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.white};
      font-size: 0.875rem;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-600']};
      border-top: 4px solid ${(props) => props.theme['gray-700']};
      padding: 1rem;
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-300']};

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  green: 'green',
  yellow: 'yellow',
  red: 'red-600',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
