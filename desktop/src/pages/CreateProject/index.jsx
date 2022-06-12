import { IsOpenDetailsProject } from '../../utils/isOpenDetailsProject'
import { useState } from 'react'
import {
  Container,
  ContainerWrapper,
  Title,
  Input,
  TextArea,
  ButtonSubmitComponent
} from './styles'
import { ArrowRight } from 'phosphor-react'
    
    
export function CreateProject(){

  const [nameProject , setNameProject] = useState('')
  const [repository , setRepository] = useState('')
  const [details, setDetails] = useState('')

  const token = localStorage.getItem('token')

  async function handleCreateProject(event){
    event.preventDefault()
    console.log('aqui')
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
          <ButtonSubmitComponent onClick={handleCreateProject}>
            Enviar
            <ArrowRight className='arrow' size={25} weight="bold" />
          </ButtonSubmitComponent>
        </div>
      </ContainerWrapper>
       

  


    </Container>
  )
}