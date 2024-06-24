import { useEffect, useState } from 'react'
import { useCycles } from '../../hooks/use-cycles'
import { Digit, PomodoroClockContainer } from './styles'

export function PomodoroClock() {
  const {
    activeCycle,
    markCycleAsFinished,
    secondsAmountPassed,
    countSecondsAmountPassed,
    restartSecondsAmountPassed,
  } = useCycles()

  const [totalSeconds, setTotalSeconds] = useState(
    activeCycle ? activeCycle?.workTime * 60 : 0,
  )
  const [pomodoroTimesAmountPassed, setPomodoroTimesAmountPassed] = useState(1)

  const currentSeconds = activeCycle ? totalSeconds - secondsAmountPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: number
    const pomodoroTimesArray = activeCycle
      ? [
          activeCycle?.workTime * 60,
          activeCycle?.shortBreakTime * 60,
          activeCycle?.workTime * 60,
          activeCycle?.shortBreakTime * 60,
          activeCycle?.workTime * 60,
          activeCycle?.longBreakTime * 60,
        ]
      : [0]

    if (activeCycle) {
      interval = setInterval(() => {
        if (secondsAmountPassed >= totalSeconds) {
          setPomodoroTimesAmountPassed((state) => state + 1)
          restartSecondsAmountPassed()
          clearInterval(interval)

          if (pomodoroTimesAmountPassed === pomodoroTimesArray.length) {
            markCycleAsFinished()
            setPomodoroTimesAmountPassed(1)
          } else {
            setTotalSeconds(pomodoroTimesArray[pomodoroTimesAmountPassed])
          }
        } else {
          countSecondsAmountPassed()
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    markCycleAsFinished,
    countSecondsAmountPassed,
    secondsAmountPassed,
    pomodoroTimesAmountPassed,
    restartSecondsAmountPassed,
  ])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}: ${seconds}`
    } else {
      document.title = 'Pomodoro Clock'
    }
  }, [minutes, seconds, activeCycle])

  return (
    <PomodoroClockContainer>
      <Digit digitcolor={pomodoroTimesAmountPassed % 2 === 0 ? 'red' : 'white'}>
        {minutes[0]}
      </Digit>
      <Digit digitcolor={pomodoroTimesAmountPassed % 2 === 0 ? 'red' : 'white'}>
        {minutes[1]}
      </Digit>
      <Digit digitcolor={pomodoroTimesAmountPassed % 2 === 0 ? 'red' : 'white'}>
        :
      </Digit>
      <Digit digitcolor={pomodoroTimesAmountPassed % 2 === 0 ? 'red' : 'white'}>
        {seconds[0]}
      </Digit>
      <Digit digitcolor={pomodoroTimesAmountPassed % 2 === 0 ? 'red' : 'white'}>
        {seconds[1]}
      </Digit>
    </PomodoroClockContainer>
  )
}
