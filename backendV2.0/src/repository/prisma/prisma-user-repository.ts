import { UserData } from '../entities/User'
import {UserRepository} from '../user-repository'

class PrismaUserRepository implements UserRepository{
  async create(data: UserData){
    const {
      name,
      password,
      github
    } = data

    
  }
}