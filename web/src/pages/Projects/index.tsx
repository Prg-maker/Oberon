import { CardsProject } from '../../components/CardsProject'
import { IsOpenDetailsProject } from '../../utils/isOpenDetailsProject'
import {UserContext} from '../../context/UserProvider'
import {
  Container
} from './styles'
import { useContext , useEffect } from 'react'



    
export function Projects(){


  return(
    <Container>
      <IsOpenDetailsProject/>

      <CardsProject/>
    </Container>
  )
}