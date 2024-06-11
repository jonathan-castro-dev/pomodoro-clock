import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import * as Slider from '@radix-ui/react-slider'
import { FormContainer, HeaderContainer } from './styles'

export function Settings() {
  return (
    <>
      <HeaderContainer>
        <h1>Configurações</h1>
        <Link to="/">
          <X />
        </Link>
      </HeaderContainer>
      <FormContainer>
        <p>Trabalho</p>
        <span>25 min</span>
        <Slider.Root
          className="SliderRoot"
          defaultValue={[25]}
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
        <span>5 min</span>
        <Slider.Root
          className="SliderRoot"
          defaultValue={[5]}
          min={5}
          max={15}
          step={5}
        >
          <Slider.Track className="SliderTrack">
            <Slider.Range className="SliderRange" />
          </Slider.Track>
          <Slider.Thumb className="SliderThumb" aria-label="Volume" />
        </Slider.Root>

        <p>Longa pausa</p>
        <span>25 min</span>
        <Slider.Root
          className="SliderRoot"
          defaultValue={[25]}
          min={5}
          max={60}
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
    </>
  )
}
