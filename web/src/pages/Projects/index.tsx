import { useState } from 'react'
import { CardsProject } from '../../components/CardsProject'
import { DetailsProject } from '../../components/DetailsProjects'
import { Header } from '../../components/Header'
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