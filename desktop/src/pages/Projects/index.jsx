import { CardsProject } from '../../components/CardsProject'
import { IsOpenDetailsProject } from '../../utils/isOpenDetailsProject'
import {
  Container
} from './styles'



    
export function Projects(){
  
  return(
    <Container>
      <IsOpenDetailsProject/>
      <CardsProject/>
    </Container>
  )
}