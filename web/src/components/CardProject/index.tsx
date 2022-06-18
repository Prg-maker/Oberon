import { DotsThreeVertical } from 'phosphor-react'
import { useState } from 'react'
import { OptionsCardProject } from '../OptionsCardProject'
import {
  Container,
  Title,
  Details,
  Status,
} from './styles'


interface PropsCard{
  title: string;
  details: string;
  progress?: string;

}
    
export function CardProject({
  title,
  details,
  progress
}: PropsCard){

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
      
      <Title>{title}</Title>
      <Details>{details}</Details>
    </Container>  
  )
}