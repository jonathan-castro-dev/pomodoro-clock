import { Link } from 'react-router-dom'
import { NewCycleForm } from '../../components/NewCycleForm'
import { X } from 'lucide-react'
import { HeaderContainer } from './styles'

export function Settings() {
  return (
    <>
      <HeaderContainer>
        <h1>Configurações</h1>
        <Link to="/">
          <X />
        </Link>
      </HeaderContainer>
      <NewCycleForm />
    </>
  )
}
