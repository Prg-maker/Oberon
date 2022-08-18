import { PrismaLoginUserRepository } from "../../repository/prisma/prisma-login-user-respository";

interface LoginUserRequest{
  name:string;
  password:string
}

export class LoginUserUseCase{
  

  constructor(
    private prismaLoginUserRepository: PrismaLoginUserRepository
  ){}
  
  async execute(){
    
  }
}