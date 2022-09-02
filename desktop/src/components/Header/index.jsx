import {
  Container,
  Name,
  Avatar,
} from './styles'
    
import {SortAscending} from 'phosphor-react'
import {useNavigate} from 'react-router-dom'

import {useContext, useEffect} from 'react'
import {UserContext} from '../../context/useContext'
import { api } from '../../services'

export function Header({isOpenDetailsProject}){


  const navigation = useNavigate()
  const {state} = useContext(UserContext)

  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userID')

  if(!token){
    navigation('/')
  }
    useEffect(()=> {

    if(!state.id){
      async function getInformationOneUser(){
        const {data} = await api.post('/user', {
          data:{
            id:userId
          }
        }, {
          headers: {
            'authorization': `Basic ${token}` 
          }
        })
    
        console.lof(data)
      }

      getInformationOneUser()
    }

     
    } , [])

  return(
    <Container>
      <Name>{state.name}</Name>


      <div>
        <Avatar src={`https://github.com/${state.github}.png`}/>

        <SortAscending onClick={isOpenDetailsProject} style={{
          color:'#fff',
          cursor:'pointer',
          marginRight: '10px'
        }} size={32} weight="light" />
      </div>

    
    </Container>
  )
}