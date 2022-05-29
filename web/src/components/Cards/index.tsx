import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from '../Card'
import { CardCreate } from '../CardCreate'
import {
  Container
} from './styles'

interface PropsListUsers{
  id:string;
  name:string;
  nameGithub?: string;
}

    
export function Cards(){

  const [listUsers , setListUsers] = useState<PropsListUsers[]>([])


  useEffect(()=> {
    async function getAccounts(){
      const {data } = await axios.get('http://localhost:3001/') 
      setListUsers(data)
    }
    getAccounts()
  } , [])

  

  return(
    <Container>
      <CardCreate/>
      {
        listUsers.map(user=> (
          <Card key={user.id} id={user.id} name={user.name} nameGithub={user.nameGithub}/>
        ))
      }
      
    </Container>
  )
}