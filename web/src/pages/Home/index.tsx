import {
  Container,
  ImgOberon,
  Title
} from './styles'

import Lua from '../../assets/Ellipse.png'
import { Button } from '../../components/Button'


export function Home(){
  return(
    <Container>
      <Title>Oberon</Title>
      <ImgOberon src={Lua} alt="oberon photo"/>

      <Button
        
      />

    </Container>
  )
}