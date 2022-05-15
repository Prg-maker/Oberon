import {
  Container,
  Form,
  Title,
  Input,
  
} from './styles'

import OberonImg from '../../assets/Ellipse.png'
    
    
export function CreateProject(){
  return(
    <Container>
      <div>
        <img src={OberonImg} alt="Oberon"  />
      </div>

      <Form>

        <div className='name'>
          <label htmlFor="nome">Nome</label>
          <Title>Nome</Title>
          <Input type="nome" />
        </div>


        <div className='github'>
          <label htmlFor="github">Perfil do github</label>
          <Title>Perfil do github</Title>
          <strong>opcional*</strong>
          <Input type="text" id='github'/>
        </div>


        <div className='github'>
          <label htmlFor="senha">Senha</label>
            <Title>Senha</Title>
            <Input type="password" id='senha'/>
        </div>
        

      

      </Form>
      
    </Container>
  )
}