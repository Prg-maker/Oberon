import { PrismaLoginUserRepository } from "../../repository/prisma/prisma-login-user-respository";
import {UseFindUserByName} from '../../hooks/useFindUserByName'

interface LoginUserRequest{
  name:string;
  password:string
}

interface LoginUserResponse{
  id:string;
  name:string;
  github:string;
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

    const user =await this.prismaLoginUserRepository.login({
      name,
      password
    }) as LoginUserResponse
    
    return user

  }
}