import { Check } from 'phosphor-react'
import {Container , Content , Text , Button}from './styles'

export function ResponseSuccess({closeMessage}){

  function Close(){
    closeMessage(false)
  }

  return (
    <Container>
      <Content>
        
        <Check size={64} weight="bold" color='green'/>
        <Text>Success</Text>
        <Button onClick={Close}>Fechar</Button>
      </Content>
    </Container>
  )
}
