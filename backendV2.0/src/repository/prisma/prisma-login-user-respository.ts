import {DataRequestLogin, DataResponseLogin, RequestLogin} from '../user-login-repository'

import {prisma} from '../../prisma'

export class PrismaLoginUserRepository implements RequestLogin {
  
  async login(data:DataRequestLogin){
    const {name,password} = data

    const user = await prisma.user.findFirst({
      where:{
        name,
        password
      }
    }) as DataResponseLogin


    if(!user){
      return null
    }
    return user
  }
}