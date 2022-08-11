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
  ){}

  

  
  
  
  async execute(request: CreateUserRequest)   {
    const {password,github} = request

    if(!request.name || request.name.length <= 3){
      throw new Error('O nome não foi fornecido ou muito curto')
    }


    if(!password || password.length <= 3){
      throw new Error('A senha não foi fornecido ou muito pequena')
    }

    const name = request.name.toUpperCase()

    const useFindUserByName = new UseFindUserByName()

    await useFindUserByName.findByName({name})
      
    await this.prismaUserRepository.create({
      name:name.toUpperCase(),
      password,
      github,
    });
  }
}
