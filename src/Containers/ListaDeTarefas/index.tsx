import Tarefa from '../../Components/Tarefa'
import { Container } from './styles'

import * as enums from '../../utils/enums/TarefaEnum'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3',
    prioridade: enums.Priodade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar internet',
    descricao: 'Baixar fatura no email',
    prioridade: enums.Priodade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Academia',
    descricao: 'Treino B',
    prioridade: enums.Priodade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;todas&quot; e &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
