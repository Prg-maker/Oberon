import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import {
  OptionsContainer,
  ButtonLogin,
  Separete,
  ButtonDelete,
} from './styles'
interface PropsOptions{
  id:string,
  nameGithub?:string
}

export function Options({id , nameGithub}:PropsOptions){

  async function DeleteOneProfile(){   
      await api.delete('/delete' , {
      data:{
        id
      }
    })

    document.location.reload()
  } 


  return(
    <OptionsContainer  >

      <ButtonLogin >
        <Link to={`/login/${nameGithub? nameGithub : 'prg-maker'}`}>
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