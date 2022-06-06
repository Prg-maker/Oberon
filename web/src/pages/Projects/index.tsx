import { CardsProject } from '../../components/CardsProject'
import { IsOpenDetailsProject } from '../../utils/isOpenDetailsProject'
import {UserContext} from '../../context/UserProvider'
import {
  Container
} from './styles'
import { useContext , useEffect } from 'react'



    
export function Projects(){
  const {setState , state} = useContext(UserContext)

  useEffect(()=> {


    setState({
      id:"1",
      name:"daniel",
      nameGithub:"",
      token: "none"
    })


  } , [])
  console.log(state)

  return(
    <Container>
      <IsOpenDetailsProject/>

      <CardsProject/>
    </Container>
  )
}