import { useEffect , useState } from 'react'
import { api } from '../../services/api'
import { CardProject } from '../CardProject'
import {
  Container 
} from './styles'
    
interface CardProps{
  id: string;
  title: string;
  details: string;
}



export function CardsProject(){
  const [dataCard , setDataCard] = useState<CardProps[]>([]) 

  
  const token = localStorage.getItem('token')

  useEffect(()=> {
    async function get(){
      try{
      const  {data} = await api.get('/projects', {

        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer '+token
        },      
      }) 

      setDataCard(data)
     }catch(err){
      return alert(err)
     }

    }

    get()

  }, [])


  return(
    <Container>
       
      {
        dataCard.map(data=> (
          <h1>data</h1>
        ))
      }
      
    </Container>
  )
}