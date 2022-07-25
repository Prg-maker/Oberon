import { UserData, UserDataId, UserResponseList , ResponseOneUserData} from '../entities/User'
import {UserRepository} from '../user-repository'
import {prisma} from '../../prisma'

export class PrismaUserRepository implements UserRepository{

  async create(data: UserData){
    const {name, password, github} = data

    await prisma.user.create({
      data:{
        name,
        password,
        github
      }
    })

  }

  async delete(data: UserDataId){

    await prisma.user.delete({
      where:{ 
       id: data.id
      }
    })
  }

  async listAllUsers(){

    const Users = await prisma.user.findMany() as UserResponseList[]


    return Users

  }


  async requestOneUser(data:UserDataId){
    

    const User = await prisma.user.findMany({
      where:{
        id:data.id
      }
    }) as ResponseOneUserData[]

    return User
    
  }
}