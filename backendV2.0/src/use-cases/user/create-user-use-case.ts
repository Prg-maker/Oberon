import { PrismaUserRepository } from "../../repository/prisma/prisma-user-repository";
import {UseFindUserByName} from '../../hooks/useFindUserByName'

interface CreateUserRequest {
  name: string;
  password: string;
  github?: string;
}

export class CreateUserUseCase {
  constructor(
    private prismaUserRepository: PrismaUserRepository,
    public useFindUserByName = new UseFindUserByName()
  ) {
  }

  

  
  async execute(request: CreateUserRequest)   {


    if(!request.name || request.name.length <= 3){
      throw new Error('O nome não foi fornecido ou muito curto')
    }

    


    if(!request.password || request.password.length <= 3){
      throw new Error('O nome não foi fornecido')
    }

    const name = request.name.toLocaleUpperCase()

    this.useFindUserByName.findByName({
      name
    })

    await this.prismaUserRepository.create({
      name,
      password: request.password,
      github: request.github,
    });
  }
}
