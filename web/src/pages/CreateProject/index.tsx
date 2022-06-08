import { ButtonSubmitComponent } from '../../components/Button'
import { IsOpenDetailsProject } from '../../utils/isOpenDetailsProject'
import {useState } from 'react'
import {
  Container,
  ContainerWrapper,
  Title,
  Input,
  TextArea,
} from './styles'
import { api } from '../../services/api'
    
    
export function CreateProject(){

  const [nameProject , setNameProject] = useState('')
  const [repository , setRepository] = useState('')
  const [details, setDetails] = useState('')

  async function handleCreateProject(){
    await api.post('')
  }

  return(
    <Container>
      <IsOpenDetailsProject/>

      <ContainerWrapper>
        <div className='name'>
            <label htmlFor="nameProject">Nome do projeto</label>
            <Title>Nome do projeto</Title>
            <Input value={nameProject} onChange={e => setNameProject(e.target.value)} placeholder='Nome do projeto' id="nameProject"/>
          </div>
          
        <div>
          <label htmlFor="repositoryGithub">Repository Github</label>
            <Title>Repository Github</Title>
            <Input   value={repository} onChange={e => setRepository(e.target.value)} placeholder='Repository Github' id="repositoryGithub"/>
        </div>
      
        <div>
          <label htmlFor="detalhesProjeto">Repository Github</label>
          <Title>Detalhes do projeto</Title>
          <TextArea value={details} onChange={e => setDetails(e.target.value)} placeholder='Detalhes do projeto' id="detalhesProjeto"/>
        </div>


        <div className='button'>
          <ButtonSubmitComponent title="Enviar"/>
        </div>
      </ContainerWrapper>
       

  


    </Container>
  )
}