import { Response } from 'express'
import {PrismaUserRepository} from '../../repository/prisma/prisma-user-repository'
import {ListOneUserUseCase} from '../../use-cases/user/list-one-user-use-case'

interface Request {
  body:{
    id:string
  }
}
export class ListOneUserController{
  async handle(request:Request, response:Response){
    const {id} = request.body


    const prismaUserRepository = new PrismaUserRepository()
    const listOneUserUseCase = new ListOneUserUseCase(prismaUserRepository)


    try{

      const user = await listOneUserUseCase.execute({
        id
      })
      return response.status(200).json({
        user
      })

    }catch({message}){
      return response.status(400).json({
        err:message
      })
    }

  }
}