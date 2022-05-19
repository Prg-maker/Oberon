import { ButtonSubmitComponent } from '../../components/Button'
import { IsOpenDetailsProject } from '../../utils/isOpenDetailsProject'

import {
  Container,
  ContainerWrapper,
  Title,
  Input,
  TextArea,
} from './styles'
    
    
export function CreateProject(){


  return(
    <Container>
      <IsOpenDetailsProject/>

      <ContainerWrapper>
        <div className='name'>
            <label htmlFor="nameProject">Nome do projeto</label>
            <Title>Nome do projeto</Title>
            <Input placeholder='Nome do projeto' id="nameProject"/>
          </div>
          
        <div>
          <label htmlFor="repositoryGithub">Repository Github</label>
            <Title>Repository Github</Title>
            <Input placeholder='Repository Github' id="repositoryGithub"/>
        </div>
      
        <div>
          <label htmlFor="detalhesProjeto">Repository Github</label>
          <Title>Detalhes do projeto</Title>
          <TextArea placeholder='Detalhes do projeto' id="detalhesProjeto"/>
        </div>


        <div className='button'>
          <ButtonSubmitComponent title="Enviar"/>
        </div>
      </ContainerWrapper>
       

  


    </Container>
  )
}