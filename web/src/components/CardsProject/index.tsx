import { useEffect } from 'react'
import { api } from '../../services/api'
import { CardProject } from '../CardProject'
import {
  Container 
} from './styles'
    
    
export function CardsProject(){
  const token = localStorage.getItem('token')

  useEffect(()=> {
    async function get(){
      try{
        const response = await api.get('/project', {

         headers: {
           'Content-Type': 'application/json',
           'authorization': 'Bearer '+token
         },      
       })      
 
 
       console.log(response)
     }catch(err){
       return alert(err)
     }

    }

    get()

  }, [])

  return(
    <Container>
      <CardProject/>
      <CardProject/>
     
     
      
    </Container>
  )
}