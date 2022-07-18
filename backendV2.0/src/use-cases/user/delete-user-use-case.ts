import {PrismaUserRepository} from '../../repository/prisma/prisma-user-repository'

interface DeleteUserResponse{
  id:string
}

export class DeleteUserUseCase{
 constructor(
   private prismaUserRepository: PrismaUserRepository
 ){}

 async execute(response:DeleteUserResponse){
  if(!response.id){
    throw new Error('O id não foi fornecido')
  }

   
 }
}