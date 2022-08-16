import {PrismaUserRepository} from '../../repository/prisma/prisma-user-repository'

interface RequestOneUser{
  id:string
}

export class ListOneUserUseCase{
  constructor(
    private prismaUseRepository: PrismaUserRepository
  ){}
  async execute({id}:RequestOneUser){
    if(!id){
      throw new Error('id does not provided')
    }

    const user = await this.prismaUseRepository.requestOneUser({
      id
    })

    if(!user){
      throw new Error("User does not exist");
    }

    return user 
  }
}