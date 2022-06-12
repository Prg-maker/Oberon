import { DotsThreeVertical } from 'phosphor-react'
import {
  Container,
  Title,
  Details,
  Status,
} from './styles'
    
    
export function CardProject(){


  return(
    <Container>
    
      <div className='header'>
        <Status/>
        <DotsThreeVertical size={32} weight="bold" style={{cursor:'pointer'}} />
      </div>
      
      <Title>Fist Project</Title>
      <Details>Mais um dia se passou, não sei o que fazer, e o que eu penso sobre vc, da qlidadsadsadsdadasddsasdsadsdas</Details>
    </Container>  
  )
}