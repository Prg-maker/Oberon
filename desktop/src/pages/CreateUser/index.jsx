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




export function CreateUser(){




  return(
    <Container>
      <div>
        <img src={OberonImg} alt="Oberon"  />
      </div>

      <Form >

        <div className='name'>
          <label htmlFor="nome">Nome</label>
          <Title>Nome</Title>
          <Input placeholder='Name' type="nome" />
        </div>


        <div className='github'>
          <label htmlFor="github">Perfil do github</label>
          <Title>Perfil do github</Title>
          <strong>opcional*</strong>
          <Input  placeholder='Perfil do github' type="text" id='github'/>
        </div>


        <div className='senha'>
          <label htmlFor="senha">Senha</label>
            <Title>Senha</Title>
            <Input placeholder='Senha' type="password" id='senha'/>
        </div>
        
        <div className='buttons'>
          <ButtonCreateProfile>
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
      
    </Container>
  )
}