import { api } from '../../services/api'
import {
  OptionsContainer,
  ButtonLogin,
  Separete,
  ButtonDelete,
} from './styles'
interface PropsOptions{
  id:string
}

export function Options({id}:PropsOptions){

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
        Entrar
      </ButtonLogin>

      <Separete/>
      <ButtonDelete onClick={DeleteOneProfile}>
        Deletar
      </ButtonDelete>
    </OptionsContainer>
  )
}