import { PrismaLoginUserRepository } from "../../repository/prisma/prisma-login-user-respository";
import {UseFindUserByName} from '../../hooks/useFindUserByName'
interface LoginUserRequest{
  name:string;
  password:string
}

export class LoginUserUseCase{
  

  constructor(
    private prismaLoginUserRepository: PrismaLoginUserRepository
  ){}
  
  async execute(request:LoginUserRequest){
    const {password} = request
    const name = request.name.toUpperCase()


    if(!password || !name){
      throw new Error('name or password does not provided')
    }

    console.log(name)    


  }
}