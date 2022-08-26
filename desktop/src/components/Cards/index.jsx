import { Card } from '../Card'
import { CardCreate } from '../CardCreate'
import {
  Container
} from './styles'
import { api } from '../../services'
import { useEffect , useState } from 'react'

export function Cards(){
  const  [users , setUsers] = useState([])
  useEffect(() => {
    async function get(){
      const {data} = await api.get('/' )
      setUsers(data)
    }

    get()
  }, [])

  console.log(users)

  return(
    <Container>
      <CardCreate/>
      {
        users.map(user=> {
          return(
            <Card
              name={user.name}
              github={user?.github}
              id={user.id}
            />
          )
        })
      }

    </Container>
  )
}