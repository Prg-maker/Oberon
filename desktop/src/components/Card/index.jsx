import {
  Container,
  Avatar,
  Name,
} from './styles'

import {DotsThreeVertical} from 'phosphor-react'
import { useState } from 'react'

export function Card(){

  const [isOptions , setIsOptions] = useState(false)

  function handleIsOptionsOpen(){
    setIsOptions(!isOptions)
  }

  return(
    <Container>
      <div>
        <Avatar src='https://github.com/Prg-maker.png'/>
        <DotsThreeVertical size={32} weight="bold" style={{cursor:'pointer'}} onClick={handleIsOptionsOpen} />

        
      </div>

      <Name>Daniel</Name>
    
    </Container>
  )
}