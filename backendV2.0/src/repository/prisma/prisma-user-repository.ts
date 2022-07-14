import { UserData } from '../entities/User'
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
}