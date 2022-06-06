import { CardsProject } from '../../components/CardsProject'
import { IsOpenDetailsProject } from '../../utils/isOpenDetailsProject'
import {UserContext} from '../../context/UserProvider'
import {
  Container
} from './styles'
import { useContext } from 'react'



    
export function Projects(){
  const user = useContext(UserContext)
  console.log(user)

  return(
    <Container>
      <IsOpenDetailsProject/>

      <CardsProject/>
    </Container>
  )
}