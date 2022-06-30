import {
  Container,
  Name,
  Avatar,
} from './styles'
    
import {SortAscending, User , ArrowLeft} from 'phosphor-react'
    
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


  function handleReturnPage(){
    window.history.back()

  }

  return(
    <Container>

      <div className='btn-back'>
        <ArrowLeft onClick={handleReturnPage} className='arrowLeft' size={32} weight='bold'/>

        <Name>{name}</Name>
      </div>
    


      <div>
        {
          nameGithub? <Avatar src={`https://github.com/${nameGithub}.png`}/> :<User className='user'  size={30}  weight="bold"  style={{
            marginRight: '12px' 
          }}/>
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