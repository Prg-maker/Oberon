import { Response } from "express";
import {LoginUserUseCase} from '../../use-cases/user/login-user-use-case'
import {PrismaLoginUserRepository}  from '../../repository/prisma/prisma-login-user-respository'
import {GenerateToken} from '../../utils/generateToken'



interface Request{
  body:{
    name:string;
    password:string;
  }
}
interface ISing{
  id:string;
  name:string;
  password:string;
  github?:string
}

export class LoginUserController{
  async handle(request:Request, response:Response){
    const {name , password}= request.body

    const prismaLoginUserRepository = new PrismaLoginUserRepository()
    const loginUserUseCase = new LoginUserUseCase(prismaLoginUserRepository)
    const generateToken = new GenerateToken()

    try{

      const user = await loginUserUseCase.execute({
        name,
        password
      }) as ISing



      return response.status(200).json({
        user,
        token:generateToken.generate(user)
      })

    }catch({message}){
      return response.status(400).json(message)
    }




  }
}