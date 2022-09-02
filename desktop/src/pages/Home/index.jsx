import { Cards } from '../../components/Cards'
import {
  Container,
} from './styles'



export function Home(){
  localStorage.clear()


  return(
    <Container>
      <Cards/>
    </Container>
  )
}

