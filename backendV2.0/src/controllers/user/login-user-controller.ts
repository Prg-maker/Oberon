import { Response } from "express";
import {LoginUserUseCase} from '../../use-cases/user/login-user-use-case'
import {PrismaLoginUserRepository}  from '../../repository/prisma/prisma-login-user-respository'

interface Request{
  body:{
    name:string;
    password:string;
  }
}

export class LoginUserController{
  async handle(request:Request, response:Response){
    const {name , password}= request.body

    const prismaLoginUserRepository = new PrismaLoginUserRepository()
    const loginUserUseCase = new LoginUserUseCase(prismaLoginUserRepository)
    

    try{

      const user = await loginUserUseCase.execute({
        name,
        password
      })

      

      return response.status(200).json(user)

    }catch({message}){
      return response.status(400).json(message)
    }




  }
}