import {
  Container,
  Form,
  Title,
  Input,
  ButtonEnterInProfile,
  ButtonBack
} from './styles'

import {ArrowLeft, ArrowRight} from 'phosphor-react'
    
    
export function Login(){


  return(
    <Container>
      <div>
        <img src={`https://upload.wikimedia.org/wikipedia/commons/3/31/Oberon_-_PIA00034.jpg`} alt="Oberon"  />
      </div>

      <Form>

        <div className='name'>
          <label htmlFor="nome">Nome</label>
          <Title>Nome</Title>
          <Input  placeholder='Name' type="nome" />
        </div>


    

        <div className='password'>
          <label htmlFor="senha">Senha</label>
            <Title>Senha</Title>
            <Input placeholder='Senha' type="password" id='senha'/>
        </div>
        
        <div className='buttons'>

        <ButtonBack href='/'>
            <ArrowLeft size={25} weight="bold" />
            Voltar
        </ButtonBack>


        <ButtonEnterInProfile >
          Entrar
          <ArrowRight size={25} weight="bold" />
        </ButtonEnterInProfile>

        </div>
       
      </Form>
      
    </Container>
  )
}