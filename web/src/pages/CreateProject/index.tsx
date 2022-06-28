import { IsOpenDetailsProject } from '../../utils/isOpenDetailsProject'
import {FormEvent, useState } from 'react'
import {
  Container,
  ContainerWrapper,
  Title,
  Input,
  TextArea,
  ButtonSubmitComponent
} from './styles'
import { api } from '../../services/api'
import { ArrowRight } from 'phosphor-react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
    
    
export function CreateProject(){

  const [nameProject , setNameProject] = useState('')
  const [repository , setRepository] = useState('')
  const [details, setDetails] = useState('')
  const [progressString, setProgressString] = useState('0')
  const token = localStorage.getItem('token')




  async function handleCreateProject(event: FormEvent){
    event.preventDefault()

  
    const progress = Number(progressString) 

    if(progress < 0 || progress > 100){
      return alert('error, valor do progress não é válido')
    }

    try{
       await api.post('/project', {
        title: nameProject,
        details,
        repositoryGit:repository,
        progress,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        },      
      })      


      await Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'usuário criado',
        showConfirmButton: false,
        timer: 1500
      })
      window.history.back()

    }catch(err){
      return alert(err)
    }
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

        <div>
          <label htmlFor="repositoryGithub">Progress</label>
            <Title>Progress</Title>
            <Input  type='number' value={progressString} onChange={e => setProgressString(e.target.value)} placeholder='Repository Github' id="repositoryGithub"/>
        </div>

        <div/>
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