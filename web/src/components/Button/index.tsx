import { ArrowRight } from 'phosphor-react'
import {
  ButtonSubmit
} from './styles'


interface PropsButton{
  title:string
}

export function ButtonSubmitComponent({title}:PropsButton){
  return(
    <ButtonSubmit>
        {title}
        <ArrowRight className='arrow' size={25} weight="bold" />
    </ButtonSubmit>
  )
}