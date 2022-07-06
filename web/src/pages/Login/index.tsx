import {
  Container,
  Form,
  Title,
  Input,
  ButtonEnterInProfile,
  ButtonBack
} from './styles'

import {ArrowLeft, ArrowRight, User} from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { api } from '../../services/api'
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../../context/UserProvider'
import Swal from 'sweetalert2'
    

interface PropsData {
  data:{
    user:{
      id:string;
      name:string;
      nameGithub:string;
    },
    token:string
  }

}

export function Login(){
  localStorage.clear()

  const {setState } = useContext(UserContext)


  const navigation = useNavigate()

  const {nameGithub} = useParams()

  const [name , setName] = useState('')
  const [password , setPassword] = useState('')

  async function handleLogin(event:  FormEvent){
    event.preventDefault()

    if(!name || name.length <= 2){
      return Swal.fire({
        icon:"error",
        title: "nome não é válido",
        text: "tente criar com outro nome"
      })
    }
    if(!password || password.length <= 7){
      return Swal.fire({
        icon:"error",
        title: "senha não é válida",
      })
    }

    try{
      const {data} = await api.post('/login' , {
        name,password
      }) as PropsData


      const {user , token} = data
      
      const userId = user.id

      const userLocal={
        name: user.name,
        nameGithub: user.nameGithub
      }

   
      localStorage.setItem("token" , `${token}`)
      localStorage.setItem("name" , `${user.name}`)
      localStorage.setItem("nameGithub" , `${user.nameGithub}`)



      setState({
        id: user.id,
        name:user.name,
        nameGithub:user.nameGithub,
      })

  

      navigation(`/projects/${userId}`)

    }catch(err){
      return Swal.fire({
        icon:"error",
        title: "Nome ou  senha está errado, tente novamente",
      })
    }



  }



  

  return(
    <Container>
      <div>
        <img src={`https://github.com/${nameGithub}.png`} alt="Oberon"  />
      </div>

      <Form>

        <div className='name'>
          <label htmlFor="nome">Nome</label>
          <Title>Nome</Title>
          <Input value={name} onChange={e => setName(e.target.value)} placeholder='Name' type="nome" />
        </div>


    

        <div className='password'>
          <label htmlFor="senha">Senha</label>
            <Title>Senha</Title>
            <Input value={password} onChange={e => setPassword(e.target.value)} placeholder='Senha' type="password" id='senha'/>
        </div>
        
        <div className='buttons'>

        <ButtonBack>
            <Link to="/">

              <ArrowLeft size={25} weight="bold" />
              Voltar
            </Link>
          </ButtonBack>


        <ButtonEnterInProfile onClick={handleLogin}>
          Entrar
          <ArrowRight size={25} weight="bold" />
        </ButtonEnterInProfile>

        </div>
       
      </Form>
      
    </Container>
  )
}