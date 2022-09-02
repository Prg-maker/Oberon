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

import { useState } from 'react'
import {api} from '../../services'
import {ResponseSuccess} from '../../components/ResponseSuccess'


export function CreateUser(){


  localStorage.clear()

  const [name, setName] = useState('')
  const [password , setPassword] = useState('')
  const [github , setGithub] = useState('')
  const [message, setMessage] = useState(false)
  
  async function handleCreteUser(event){
    event.preventDefault()
    try{
      await api.post('/' , {
        name,
        password,
        github
      })
      setMessage(true)
    }catch(err){
      return err
    }
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
          <Input onChange={e => setName(e.target.value)} placeholder='Name' type="nome" />
        </div>


        <div className='github'>
          <label htmlFor="github">Perfil do github</label>
          <Title>Perfil do github</Title>
          <strong>opcional*</strong>
          <Input onChange={e => setGithub(e.target.value)} placeholder='Perfil do github' type="text" id='github'/>
        </div>


        <div className='senha'>
          <label htmlFor="senha">Senha</label>
            <Title>Senha</Title>
            <Input onChange={e => setPassword(e.target.value)} placeholder='Senha' type="password" id='senha'/>
        </div>
        
        <div className='buttons'>
          <ButtonCreateProfile
            onClick={handleCreteUser}
          >
            Criar
            <ArrowRight size={25} weight="bold" />
          </ButtonCreateProfile>
        
            <ButtonBack
              href='/'
            >

                <ArrowLeft size={25} weight="bold" />
                Voltar
            </ButtonBack>
         
        </div>
     

      </Form>

      {
        !message? '' : <ResponseSuccess closeMessage={setMessage}/>
      }
    </Container>
  )
}