import {  Response} from 'express'
import {PrismaUserRepository} from '../../repository/prisma/prisma-user-repository'
import {CreateUserUseCase} from '../../use-cases/user/create-user-use-case'

interface Request {
  body:{
    name:string;
    password:string;
    github?:string;
  }
} 

export class CreateUserController{
  async handle(request: Request , response:Response){
    const {name , password , github} = request.body
    const prismaUserRepository = new PrismaUserRepository()
    const createUserUseCase= new CreateUserUseCase(prismaUserRepository)


    try{

      await createUserUseCase.execute({
        name,
        password,
        github
      })

      return response.status(201).json({
        message: 'success'
      })

    }catch({message}){
      console.log(message)

      return response.status(400).json({
        message
      })
    }

  }
}