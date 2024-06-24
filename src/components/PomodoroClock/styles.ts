import { styled } from 'styled-components'

export const PomodoroClockContainer = styled.div`
  border-radius: 100%;
  outline-offset: 0.5rem;
  padding: 5rem 1.2rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 5rem;
  border: 4px solid ${(props) => props.theme.white};
  outline: 4px solid ${(props) => props.theme['red-500']};
`

const STATUS_COLORS = {
  red: 'red-500',
  white: 'white',
} as const

interface DigitProps {
  digitcolor: keyof typeof STATUS_COLORS
}

export const Digit = styled.span<DigitProps>`
  color: ${(props) => props.theme[STATUS_COLORS[props.digitcolor]]};
`
