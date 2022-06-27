import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import {
  Container,
  Separete,
  ButtonDelete,
} from './styles'

interface OptionsCardProjectProps{
  id:string
}



export function OptionsCardProject(props:OptionsCardProjectProps){

  const token = localStorage.getItem('token')


  async function DeleteOneCardProject(){
    await api.delete('/project' , {
      data:{
        id:props.id
      },
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer '+token
      },    
    })

    document.location.reload()

  }
 
  return(
    <Container>
      <Link to={`/project/details/${props.id}`}>
        Detalhes
      </Link>
      
      <Separete/>

      <ButtonDelete onClick={DeleteOneCardProject}>
        Deletar
      </ButtonDelete>
    </Container>
  )
}