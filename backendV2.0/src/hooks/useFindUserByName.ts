import {UseFindUserDataProps , DataProps , Error} from './type/data-user-props-find-by-name'
import {prisma} from '../prisma'

export class UseFindUserByName implements UseFindUserDataProps{

 async findByName (data:DataProps){
  const {name} = data



  if(!name){
    throw new Error('name does not provided')
  }
  
  const nameAlreadyExist = await prisma.user.findFirst({
    where:{
      name:name.toUpperCase()
    }
  })


  if(!nameAlreadyExist){
    return null
  }

  throw new Error('User already exist')


 }
}