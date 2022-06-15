import { Card } from '../Card'
import { CardCreate } from '../CardCreate'
import {
  Container
} from './styles'

    
    
export function Cards(){



  return(
    <Container>
      <CardCreate/>
      <Card/>
      <Card/>
    </Container>
  )
}