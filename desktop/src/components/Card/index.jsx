import {
  Container,
  Avatar,
  Name,
} from './styles'

import {DotsThreeVertical} from 'phosphor-react'
import { useState } from 'react'
import { Options } from '../Options'

export function Card({
  id,
  name,
  github
}){

  const [isOptions , setIsOptions] = useState(false)

  function handleIsOptionsOpen(){
    setIsOptions(!isOptions)
  }
  
  return(
    <Container>
      <div>
        {
          github? 
          <Avatar src={`https://github.com/${github}.png`}/>
          :
          "Não foi informado"
        }

        <DotsThreeVertical size={32} weight="bold" style={{cursor:'pointer'}} onClick={handleIsOptionsOpen} />
        {isOptions && <Options/>}
        
      </div>

      <Name>{name}</Name>
    
    </Container>
  )
}