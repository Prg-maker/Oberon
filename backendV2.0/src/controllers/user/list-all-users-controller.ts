import {  Response , Request} from 'express'

import {PrismaUserRepository} from '../../repository/prisma/prisma-user-repository'
import { ListAllUsersUseCase} from '../../use-cases/user/list-all-users-use-case'

export class ListAllUsersController{
  async handle(request:Request, response:Response){
    const prismaUserRepository  = new PrismaUserRepository()
    const listAllUsersUseCase = new ListAllUsersUseCase(prismaUserRepository)

    try{

      const users = await listAllUsersUseCase.execute()

      users.map(user => {
         user.password = ''
      })

      return response.status(200).json(users)

    }catch({message}){
      return response.status(400).json({
        err:message
      })
    }

    
    
  }
}