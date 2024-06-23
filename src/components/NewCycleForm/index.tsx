import { FormEvent, useState } from 'react'
import { useCycles } from '../../hooks/use-cycles'
import { Link } from 'react-router-dom'
import * as Slider from '@radix-ui/react-slider'
import { FormContainer } from './styles'

interface CycleInput {
  workTime: number
  shortBreakTime: number
  longBreakTime: number
}

export function NewCycleForm() {
  const { createNewCycle } = useCycles()

  const [workTime, setWorkTime] = useState([25])
  const [shortBreakTime, setShortBreakTime] = useState([5])
  const [longBreakTime, setLongBreakTime] = useState([25])

  function handleCreateNewCycle(event: FormEvent) {
    event.preventDefault()

    const cycleInput: CycleInput = {
      workTime: workTime[0],
      shortBreakTime: shortBreakTime[0],
      longBreakTime: longBreakTime[0],
    }

    createNewCycle(cycleInput)
  }

  return (
    <FormContainer onSubmit={handleCreateNewCycle}>
      <p>Trabalho</p>
      <span>{workTime} min</span>
      <Slider.Root
        className="SliderRoot"
        value={workTime}
        onValueChange={(value) => setWorkTime(value)}
        min={10}
        max={60}
        step={5}
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
      </Slider.Root>

      <p>Pequena pausa</p>
      <span>{shortBreakTime} min</span>
      <Slider.Root
        className="SliderRoot"
        value={shortBreakTime}
        onValueChange={(value) => setShortBreakTime(value)}
        min={5}
        max={20}
        step={5}
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
      </Slider.Root>

      <p>Longa pausa</p>
      <span>{longBreakTime} min</span>
      <Slider.Root
        className="SliderRoot"
        value={longBreakTime}
        onValueChange={(value) => setLongBreakTime(value)}
        min={15}
        max={40}
        step={5}
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
      </Slider.Root>

      <div>
        <Link to="/">Cancelar</Link>
        <button type="submit">Aplicar</button>
      </div>
    </FormContainer>
  )
}
