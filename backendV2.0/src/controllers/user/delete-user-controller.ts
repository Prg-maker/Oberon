import { Response} from 'express'
import {PrismaUserRepository} from '../../repository/prisma/prisma-user-repository'
import {DeleteUserUseCase} from '../../use-cases/user/delete-user-use-case'

interface Request{
  body:{
    id:string
  }
}

export class DeleteUserController{
  async handle(request:Request, response:Response){
    const {id} =request.body
    const prismaUserRepository  = new PrismaUserRepository()
    const deleteUserUseCase = new DeleteUserUseCase(prismaUserRepository)
    
    try{

      await deleteUserUseCase.execute({
        id
      })

      return response.status(202).json({
        message:'delete success'
      })

    }catch({message}){
      return response.status(401).json({
        err:message
      })
    }
  }
}