import {
  Container,
  ButtonDetails,
  Separete,
  ButtonDelete,
} from './styles'
    
    
export function OptionsCardProject(){
  return(
    <Container>
      <ButtonDetails>
        Detalhes
      </ButtonDetails>
        <Separete/>
      <ButtonDelete>
        Deletar
      </ButtonDelete>
    </Container>
  )
}