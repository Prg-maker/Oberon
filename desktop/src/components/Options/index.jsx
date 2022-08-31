import {
  OptionsContainer,
  ButtonLogin,
  Separete,
  ButtonDelete,
} from './styles'

import {api} from '../../services'

export function Options(props){

  async function handleDelete(){  
    try{
      await api.delete('/user' , {
        data:{
          id:props.id
        }
      })

      return document.location.reload()

    }catch({message}){
      console.log(message)
    }
  }



  
  return(
    <OptionsContainer>

      <ButtonLogin href={`/login/${props.id}`}>
          Entrar
      </ButtonLogin>

      <Separete/>
      <ButtonDelete onClick={handleDelete}>
        Deletar
      </ButtonDelete>
    </OptionsContainer>
  )
}