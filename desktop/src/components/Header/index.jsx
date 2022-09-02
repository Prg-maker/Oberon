import {
  Container,
  Name,
  Avatar,
} from './styles'
    
import {SortAscending} from 'phosphor-react'
import {useNavigate} from 'react-router-dom'
    


export function Header({isOpenDetailsProject}){

  const navigation = useNavigate()


  const token = localStorage.getItem('token')

  if(!token){
    navigation('/')
  }



  return(
    <Container>
      <Name>Daniel Fernandes Silva</Name>


      <div>
        <Avatar src='https://github.com/Prg-Maker.png'/>

        <SortAscending onClick={isOpenDetailsProject} style={{
          color:'#fff',
          cursor:'pointer',
          marginRight: '10px'
        }} size={32} weight="light" />
      </div>

    
    </Container>
  )
}