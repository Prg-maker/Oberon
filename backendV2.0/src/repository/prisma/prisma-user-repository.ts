import { UserData, UserDataDelete, UserResponseList } from '../entities/User'
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

  async delete(data: UserDataDelete){

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

}