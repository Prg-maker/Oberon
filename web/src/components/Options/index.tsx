import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import {
  OptionsContainer,
  ButtonLogin,
  Separete,
  ButtonDelete,
} from './styles'
interface PropsOptions{
  cardId:string,
  nameGithub?:string
}

export function Options(props:PropsOptions){

  async function DeleteOneProfile(){  
      await api.delete('/delete' , {
      data:{
        id:props.cardId
      }
    })
    document.location.reload()
  } 


  return(
    <OptionsContainer  >

      <ButtonLogin >
        <Link to={`/login/${props.nameGithub ? props.nameGithub : 'user'}`}>
          Entrar
        </Link>
      </ButtonLogin>

      <Separete/>
      <ButtonDelete onClick={DeleteOneProfile}>
        Deletar
      </ButtonDelete>
    </OptionsContainer>
  )
}