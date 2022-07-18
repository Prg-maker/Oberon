import {PrismaUserRepository} from '../../repository/prisma/prisma-user-repository'

interface DeleteUserResponse{
  id:string
}

class DeleteUserUseCase{
 constructor(
   private prismaUserRepository: PrismaUserRepository
 ){}

 async execute(response:DeleteUserResponse){

  if()
   
 }
}