import {
  OptionsContainer,
  ButtonLogin,
  Separete,
  ButtonDelete,
} from './styles'
    
    
export function Options(){
  return(
    <OptionsContainer>
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