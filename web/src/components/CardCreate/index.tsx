import {
  Container
} from './styles'
  

import {Plus} from 'phosphor-react'
    
export function CardCreate(){
  return(
    <Container>
      <Plus style={{
        color: "#fff",
        background: "#c4c4c4",
        borderRadius: "50%"
      }} className='PlusCircle' size={50}/>
    </Container>
  )
}