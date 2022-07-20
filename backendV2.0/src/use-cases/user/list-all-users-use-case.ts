import {PrismaUserRepository} from '../../repository/prisma/prisma-user-repository'


export class ListAllUsersUseCase{
    
  constructor(
    private prismaUserRepository: PrismaUserRepository
  ){}

  async execute(){

    return await this.prismaUserRepository.listAllUsers()
    
  }
}