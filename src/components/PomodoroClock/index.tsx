import { useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'
import { useCycles } from '../../hooks/use-cycles'
import { PomodoroClockContainer } from './styles'

export function PomodoroClock() {
  const {
    activeCycle,
    markCycleAsFinished,
    secondsAmountPassed,
    CountSecondsAmountPassed,
  } = useCycles()

  const totalSeconds = activeCycle ? activeCycle?.workTime * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - secondsAmountPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const differenceSeconds = differenceInSeconds(
          new Date(),
          activeCycle.createdAt,
        )

        if (differenceSeconds >= totalSeconds) {
          markCycleAsFinished()
          clearInterval(interval)
        } else {
          CountSecondsAmountPassed(differenceSeconds)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, markCycleAsFinished, CountSecondsAmountPassed])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}: ${seconds}`
    } else {
      document.title = 'Pomodoro Clock'
    }
  }, [minutes, seconds, activeCycle])

  return (
    <PomodoroClockContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <span>:</span>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </PomodoroClockContainer>
  )
}
