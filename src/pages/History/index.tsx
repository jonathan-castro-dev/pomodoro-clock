import { X } from 'lucide-react'
import { HeaderContainer, HistoryList } from './styles'
import { Link } from 'react-router-dom'

export function History() {
  return (
    <>
      <HeaderContainer>
        <h1>Meu histórico</h1>
        <Link to="/">
          <X />
        </Link>
      </HeaderContainer>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Duração</th>
              <th>Início</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pomodoro 1</td>
              <td>20 minutos</td>
              <td>Há duas semanas</td>
            </tr>
            <tr>
              <td>Pomodoro 2</td>
              <td>20 minutos</td>
              <td>Há duas semanas</td>
            </tr>
            <tr>
              <td>Pomodoro 3</td>
              <td>20 minutos</td>
              <td>Há duas semanas</td>
            </tr>
            <tr>
              <td>Pomodoro 4</td>
              <td>20 minutos</td>
              <td>Há duas semanas</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </>
  )
}
