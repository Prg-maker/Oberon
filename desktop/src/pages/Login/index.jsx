import {
  Container,
  Form,
  Title,
  Input,
  ButtonEnterInProfile,
  ButtonBack
} from './styles'

import {ArrowLeft, ArrowRight} from 'phosphor-react'

import {useState}from 'react'
import {api} from '../../services'
    
export function Login(){

  const [password, setPassword] = useState('')
  const [name , setName] = useState('')

  async function handleSingIn(event){
    event.preventDefault()
    try{
      const {data} = await api.post('/login ', {
        name,
        password
      })
      
      localStorage.setItem('token' ,data.token )
      console.log(data)
    }catch({message}){
      console.log('message')
    }

  
  }


  return(
    <Container>
      <div>
        <img src={`https://upload.wikimedia.org/wikipedia/commons/3/31/Oberon_-_PIA00034.jpg`} alt="Oberon"  />
      </div>

      <Form>

        <div className='name'>
          <label htmlFor="nome">Nome</label>
          <Title>Nome</Title>
          <Input onChange={e => setName(e.target.value)} value={name} placeholder='Name' type="nome" />
        </div>


    

        <div className='password'>
          <label htmlFor="senha">Senha</label>
            <Title>Senha</Title>
            <Input onChange={e => setPassword(e.target.value)}  placeholder='Senha' type="password" id='senha'/>
        </div>
        
        <div className='buttons'>

        <ButtonBack href='/'>
            <ArrowLeft size={25} weight="bold" />
            Voltar
        </ButtonBack>


        <ButtonEnterInProfile  onClick={handleSingIn}>
          Entrar
          <ArrowRight size={25} weight="bold" />
        </ButtonEnterInProfile>

        </div>
       
      </Form>
      
    </Container>
  )
}