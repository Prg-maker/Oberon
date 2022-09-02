import { Plus, SignOut } from 'phosphor-react'
import {
  Container,
  Separete,
  ButtonCreateProject,
  Exit,
} from './styles'

import {UserContext} from '../../context/useContext'
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
    
export function DetailsProject(){

  const navigation = useNavigate()

  const {setState} = useContext(UserContext)

  function handleLogout(){
    setState({})
    localStorage.clear()
    navigation('/')
  }

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

      <Exit
        onClick={handleLogout}
      >
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