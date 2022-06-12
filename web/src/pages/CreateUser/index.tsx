import {
  Container,
  Form,
  Title,
  Input,
  ButtonCreateProfile,
  ButtonBack
} from './styles'

import OberonImg from '../../assets/Ellipse.png'

import {ArrowRight} from 'phosphor-react'
import {ArrowLeft} from 'phosphor-react'
import { Link , useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'



export function CreateUser(){

  localStorage.clear()
  const [name , setName] = useState('')
  const [nameGithub , setNameGithub] = useState('')
  const [password , setPassword] = useState('')

  const navigation = useNavigate()

  async function  submitProfile(event:FormEvent){
    event.preventDefault()

    if(!name || name.length <= 5){
      return alert('O nome não é válido')
    }
    if(!password || password.length <= 7){
      return alert('A senha não é válido')
    }

    await api.post('/register' , {
      name,
      nameGithub,
      password
    }) 
    setName('')
    setPassword('')
    setNameGithub('')
    alert('usuário foi criado')

    navigation('/')

 
   
    
  }

  return(
    <Container>
      <div>
        <img src={OberonImg} alt="Oberon"  />
      </div>

      <Form >

        <div className='name'>
          <label htmlFor="nome">Nome</label>
          <Title>Nome</Title>
          <Input value={name} onChange={e => setName(e.target.value)} placeholder='Name' type="nome" />
        </div>


        <div className='github'>
          <label htmlFor="github">Perfil do github</label>
          <Title>Perfil do github</Title>
          <strong>opcional*</strong>
          <Input value={nameGithub} onChange={e => setNameGithub(e.target.value)}  placeholder='Perfil do github' type="text" id='github'/>
        </div>


        <div className='senha'>
          <label htmlFor="senha">Senha</label>
            <Title>Senha</Title>
            <Input value={password} onChange={e => setPassword(e.target.value)} placeholder='Senha' type="password" id='senha'/>
        </div>
        
        <div className='buttons'>
          <ButtonCreateProfile onClick={submitProfile}>
            Criar
            <ArrowRight size={25} weight="bold" />
          </ButtonCreateProfile>
        
            <ButtonBack>
              <Link to="/">

                <ArrowLeft size={25} weight="bold" />
                Voltar
              </Link>
            </ButtonBack>
         
        </div>
     

      </Form>
      
    </Container>
  )
}