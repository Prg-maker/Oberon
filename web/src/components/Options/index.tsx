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
    console.log('aqui')
  } 
  console.log('aqui')

  return(
    <OptionsContainer  onClick={DeleteOneProfile}>
      <ButtonLogin>
        Entrar
      </ButtonLogin>

      <Separete/>
      <ButtonDelete>
        Deletar
      </ButtonDelete>
    </OptionsContainer>
  )
}