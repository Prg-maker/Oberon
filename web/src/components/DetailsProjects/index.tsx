import { Plus, SignOut } from 'phosphor-react'
import {
  Container,
  Separete,
  ButtonCreateProject,
  Exit,
} from './styles'

import {useNavigate}from 'react-router-dom'
    
    
export function DetailsProject(){
  const navigation = useNavigate()

  function handleClickExit(){
    localStorage.clear()
    navigation('/')
  }

  function LinkHandleClick(){
    navigation('/projects')
  }
  return(
    <Container>

      <div className='div'>
        <div className='btc'/>
        <Separete/>
      </div> 


      <ButtonCreateProject onClick={LinkHandleClick}>
        <Plus size={20} weight="bold" style={{
          position:'absolute',
          left: 0,
          marginLeft: '10px'
        }} />
        Criar Projeto
      </ButtonCreateProject>

      <Exit onClick={handleClickExit}>
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