import {
  Container
} from './styles'
  

import {Plus} from 'phosphor-react'
import { Link } from 'react-router-dom'
    
export function CardCreate(){
  return(
    <Container>

      <Link to="/register">
        <Plus style={{
          color: "#fff",
          background: "#c4c4c4",
          borderRadius: "50%"
        }} className='PlusCircle' size={50}/>
      </Link>
    
    </Container>
  )
}