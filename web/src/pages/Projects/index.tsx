import { CardsProject } from '../../components/CardsProject'
import { IsOpenDetailsProject } from '../../utils/isOpenDetailsProject'
import {UserContext} from '../../context/UserProvider'
import {
  Container
} from './styles'
import { useContext , useEffect } from 'react'



    
export function Projects(){

  const {state} = useContext(UserContext)

  return(
    <Container>
      <IsOpenDetailsProject/>

      <CardsProject/>
    </Container>
  )
}