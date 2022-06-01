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
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'
import {useNavigate} from 'react-router-dom'
    
    
export function Login(){
  const navigation = useNavigate()

  const {nameGithub} = useParams()

  const [name , setName] = useState('')
  const [password , setPassword] = useState('')

  async function handleLogin(event:  FormEvent){
    event.preventDefault()

    if(!name || name.length <= 5){
      return alert('O nome não é válido')
    }
    if(!password || password.length <= 7){
      return alert('A senha não é válido')
    }

    try{
      const {data} = await api.post('/login' , {
        name,password
      })

      const userId = data.user.id
     
      localStorage.setItem("token" , `${data.token}`)


      navigation(`/projects/${userId}`)

    }catch(err){
      return alert('error')
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