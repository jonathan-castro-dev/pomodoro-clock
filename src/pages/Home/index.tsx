import { Link } from 'react-router-dom'
import { useCycles } from '../../hooks/use-cycles'
import { RotateCw, ScrollText, Settings } from 'lucide-react'
import { HeaderContainer, MainContainer, ToolsContainer } from './styles'
import { PomodoroClock } from '../../components/PomodoroClock'

export function Home() {
  const { activeCycle, interruptCycle } = useCycles()

  function handleInterruptCycle() {
    interruptCycle()
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
        <PomodoroClock />
        <ToolsContainer>
          <button
            type="button"
            title="Parar"
            disabled={!activeCycle}
            onClick={handleInterruptCycle}
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
