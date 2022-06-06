import { Plus, SignOut } from 'phosphor-react'
import {
  Container,
  Separete,
  ButtonCreateProject,
  Exit,
} from './styles'
    
    
export function DetailsProject(){
  return(
    <Container>

      <div className='div'>
        <div className='btc'/>
        <Separete/>
      </div> 


      <ButtonCreateProject>
        <Plus size={20} weight="bold" style={{
          position:'absolute',
          left: 0,  
          marginLeft: '10px'
        }} />
        Criar Projeto
      </ButtonCreateProject>

      <Exit>
        <SignOut size={20} weight="bold" style={{
          position:'absolute',
          left: 0,
          marginLeft: '10px'
        }} />
        Sair
      </Exit>
    </Container>
  )
} 