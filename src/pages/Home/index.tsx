import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCycles } from '../../hooks/use-cycles'
import { differenceInSeconds } from 'date-fns'
import { RotateCw, ScrollText, Settings } from 'lucide-react'
import {
  ClockContainer,
  HeaderContainer,
  MainContainer,
  PomodoroStepContainer,
  ToolsContainer,
} from './styles'

export function Home() {
  const { cycles, activeCycleId, stopCycle, finishedCycle } = useCycles()
  const [secondsAmountPassed, setSecondsAmountPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle?.workTime * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - secondsAmountPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}: ${seconds}`
    } else {
      document.title = 'Pomodoro Clock'
    }
  }, [minutes, seconds, activeCycle])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const differenceSeconds = differenceInSeconds(
          new Date(),
          activeCycle.createdAt,
        )

        if (differenceSeconds >= totalSeconds) {
          finishedCycle()
          setSecondsAmountPassed(0)
          clearInterval(interval)
        } else {
          setSecondsAmountPassed(differenceSeconds)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, finishedCycle])

  function handleStopCycle() {
    setSecondsAmountPassed(0)
    stopCycle()
  }

  return (
    <>
      <HeaderContainer>
        <h1>Pomodoro Clock</h1>
        <Link title="Lista de ciclos" to="/history">
          <ScrollText />
        </Link>
      </HeaderContainer>
      <MainContainer>
        <ClockContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <span>:</span>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </ClockContainer>
        <PomodoroStepContainer>
          <div />
          <div />
          <div />
          <div />
        </PomodoroStepContainer>
        <ToolsContainer>
          <button
            type="button"
            title="Parar"
            disabled={!activeCycle}
            onClick={handleStopCycle}
          >
            <RotateCw size={15} />
          </button>
          <Link
            title="Configurações"
            to={activeCycle ? '' : '/settings'}
            className={activeCycle ? 'isDisabled' : ''}
          >
            <Settings size={15} />
          </Link>
        </ToolsContainer>
      </MainContainer>
    </>
  )
}
