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

  try{
    await this.prismaUserRepository.delete({
      id: response.id
    })


  }catch(err){
    throw new Error('Usuário não existe')
  }

   
 }
}