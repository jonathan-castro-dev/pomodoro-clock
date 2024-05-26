import { Play, RotateCw, ScrollText, Settings } from 'lucide-react'
import {
  ClockContainer,
  HeaderContainer,
  MainContainer,
  PomodoroStepContainer,
  ToolsContainer,
} from './styles'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <HeaderContainer>
        <h1>Pomodoro Clock</h1>
        <Link to="/history">
          <ScrollText />
        </Link>
      </HeaderContainer>
      <MainContainer>
        <ClockContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </ClockContainer>
        <PomodoroStepContainer>
          <div />
          <div />
          <div />
          <div />
        </PomodoroStepContainer>
        <ToolsContainer>
          <button type="button">
            <RotateCw size={15} />
          </button>
          <button type="button">
            <Play size={34} />
          </button>
          <Link to="/settings">
            <Settings size={15} />
          </Link>
        </ToolsContainer>
      </MainContainer>
    </>
  )
}
