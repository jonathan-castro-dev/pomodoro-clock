import { Link } from 'react-router-dom'
import { useCycles } from '../../hooks/use-cycles'
import { X } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { HeaderContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useCycles()

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
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.name}</td>
                <td>
                  {cycle.workTime} {cycle.workTime > 1 ? 'minutos' : 'minuto'}
                </td>
                <td>
                  {formatDistanceToNow(cycle.createdAt, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <Status statusColor="green">Concluído</Status>
                  )}

                  {cycle.interruptDate && (
                    <Status statusColor="red">Interrompido</Status>
                  )}

                  {!cycle.finishedDate && !cycle.interruptDate && (
                    <Status statusColor="yellow">Em andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </>
  )
}
