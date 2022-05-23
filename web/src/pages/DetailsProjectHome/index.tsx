import { IsOpenDetailsProject } from '../../utils/isOpenDetailsProject'
import {
  Container
} from './styles'
    
    
export function DetailsProjectHome(){
  return(
    <Container>
      <IsOpenDetailsProject/>
      <Project>
        <Title>Fist Project</Title>

      </Project>
    </Container>
  )
}