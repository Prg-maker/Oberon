import { Link } from 'react-router-dom'
import { api } from '../../services/api'

import Swal from 'sweetalert2'


import {
  Container,
  Separete,
  ButtonDelete,
} from './styles'



interface OptionsCardProjectProps{
  id:string
}


 
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})


export function OptionsCardProject(props:OptionsCardProjectProps){

  const token = localStorage.getItem('token')


  async function DeleteOneCardProject(){
    /*await api.delete('/project' , {
      data:{
        id:props.id
      },
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer '+token
      },    
    })



    document.location.reload()*/
    swalWithBootstrapButtons.fire({
      title:"Tem certeza que quer excluir?",
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Não, cancelar!',
      reverseButtons: true
    }).then(async (result)=> {

      if(result.isConfirmed){
        await api.delete('/project' , {
          data:{
            id:props.id
          },
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer '+token
          },    
        })
        
        swalWithBootstrapButtons.fire(
          'Deletado!',
          'Projeto Deletado.',
          'success'
        )
        return document.location.reload()

      }else if(result.dismiss === Swal.DismissReason.cancel){
        swalWithBootstrapButtons.fire({
          icon: 'error',
          title:'Cancelado'
        })

      }


    })

  }
 
  return(
    <Container>
      <Link to={`/project/details/${props.id}`}>
        Detalhes
      </Link>
      
      <Separete/>

      <ButtonDelete onClick={DeleteOneCardProject}>
        Deletar
      </ButtonDelete>
    </Container>
  )
}