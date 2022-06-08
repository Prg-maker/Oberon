import {
  Container,
  Name,
  Avatar,
} from './styles'
    
import {SortAscending, User} from 'phosphor-react'
    
interface HeaderProps{
  data:{
    name: string;
    nameGithub:string;
  }
  isOpenDetailsProject: ()=> void,
}

export function Header({
  isOpenDetailsProject,
  data
}: HeaderProps){

  const {name,nameGithub} = data
  console.log(name)
  return(
    <Container>
      <Name>{name}</Name>


      <div>
        {
          nameGithub? <Avatar src={`https://github.com/${nameGithub}.png`}/> :<User className='user' size={50}  weight="bold" />
        }

        <SortAscending onClick={isOpenDetailsProject} style={{
          color:'#fff',
          cursor:'pointer',
          marginRight: '10px'
        }} size={32} weight="light" />
      </div>

    
    </Container>
  )
}