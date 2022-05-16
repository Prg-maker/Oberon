import { DotsThreeVertical } from 'phosphor-react'
import { useState } from 'react'
import { OptionsCardProject } from '../OptionsCardProject'
import {
  Container,
  Title,
  Details,
  Status,
} from './styles'
    
    
export function CardProject(){

  const [isOpenOptionsCardProject , setIsOpenOptionsCardProject ] = useState(false)

  function toggleIsOpenOptionsCardProject(){
    setIsOpenOptionsCardProject(!isOpenOptionsCardProject)
  }

  return(
    <Container>
      {
        isOpenOptionsCardProject && <OptionsCardProject/>
      }

      <div className='header'>
        <Status/>
        <DotsThreeVertical size={32} weight="bold" style={{cursor:'pointer'}} onClick={toggleIsOpenOptionsCardProject} />
      </div>
      
      <Title>Fist Project</Title>
      <Details>Mais um dia se passou, não sei o que fazer, e o que eu penso sobre vc, da qlidadsadsadsdadasddsasdsadsdas</Details>
    </Container>  
  )
}