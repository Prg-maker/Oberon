import { useState } from 'react'
import { CardsProject } from '../../components/CardsProject'
import { DetailsProject } from '../../components/DetailsProjects'
import { Header } from '../../components/Header'
import {
  Container
} from './styles'



    
export function Projects(){
  const [isOpenDetailsProject , setIsOpenDetailsProject] = useState(false)

  function toggleOpenDetailsProject(){
    setIsOpenDetailsProject(!isOpenDetailsProject)
  }


  return(
    <Container>
      <Header isOpenDetailsProject={toggleOpenDetailsProject}/>
      {
        isOpenDetailsProject && <DetailsProject/>
      }

      <CardsProject/>
    </Container>
  )
}