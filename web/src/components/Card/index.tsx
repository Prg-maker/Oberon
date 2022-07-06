import {
  Container,
  Avatar,
  Name,
} from './styles'

import {DotsThreeVertical, User} from 'phosphor-react'
import { Options } from '../Options'
import { useState } from 'react'

interface PropsCard{
  cardId:string;
  name:string;
  nameGithub?: string;
}


export function Card({
  cardId,
  name,
  nameGithub
}:PropsCard){

  const [isOptions , setIsOptions] = useState(false)


  function handleIsOptionsOpen(){
    setIsOptions(!isOptions)
  }

    
  return(
    <Container>
      <div>

        {
          nameGithub? <Avatar src={`https://github.com/${nameGithub}.png`}/> :<User className='user' size={50}  weight="bold" />
        }
        <DotsThreeVertical className='ponts' size={32} weight="bold" style={{cursor:'pointer'}} onClick={handleIsOptionsOpen} />
        
        {isOptions && <Options cardId={cardId} nameGithub={nameGithub}/> }
      </div>

      <Name>{name}</Name>
    
    </Container>
  )
}