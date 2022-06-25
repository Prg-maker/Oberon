import { DotsThreeVertical } from 'phosphor-react'
import { useState } from 'react'
import { OptionsCardProject } from '../OptionsCardProject'
import {
  Container,
  Title,
  Details,
  Status
} from './styles'


interface PropsCard{
  CardId:string;
  title: string;
  details: string;
  progress: number | 0;

}
    
export function CardProject({
  title,
  details,
  progress,
  CardId
}: PropsCard){

  const [isOpenOptionsCardProject , setIsOpenOptionsCardProject ] = useState(false)

  function toggleIsOpenOptionsCardProject(){
    setIsOpenOptionsCardProject(!isOpenOptionsCardProject)
  }

  const colorProgressCard = progress <= 30? 'var(--color-progress_red)' : progress <= 70 ? 'var(--color-progress_yellow)' : 'var(--color-progress_green)'
  

  return(
    <Container>
      {
        isOpenOptionsCardProject && <OptionsCardProject id={CardId}/>
      }

      <div className='header'>
        <Status style={{
          background: colorProgressCard,
        }}/>
        <DotsThreeVertical size={32} weight="bold" style={{cursor:'pointer'}} onClick={toggleIsOpenOptionsCardProject} />
      </div>
      
      <Title>{title}</Title>
      <Details>{details}</Details>
    </Container>  
  )
}