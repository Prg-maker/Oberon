import {
  Container,
  Avatar,
  Name,
} from './styles'

import {DotsThreeVertical, User} from 'phosphor-react'
import { Options } from '../Options'
import { useState } from 'react'

interface PropsCard{
  id:string;
  name:string;
  nameGithub?: string;
}


export function Card({
  id,
  name,
  nameGithub
}:PropsCard){

  const [isOptions , setIsOptions] = useState(false)

  function handleIsOptionsOpen(){
    setIsOptions(!isOptions)
    console.log(isOptions)
  }

    
  return(
    <Container>
      <div>

        {
          nameGithub? <Avatar src={`https://github.com/${nameGithub}.png`}/> :<User className='user' size={50}  weight="bold" />
        }
        <DotsThreeVertical className='ponts' size={32} weight="bold" style={{cursor:'pointer'}} onClick={handleIsOptionsOpen} />
        
        {isOptions && <Options id={id} nameGithub={nameGithub}/> }
      </div>

      <Name>{name}</Name>
    
    </Container>
  )
}