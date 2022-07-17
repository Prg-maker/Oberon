import { PrismaUserRepository } from "../../repository/prisma/prisma-user-repository";


interface CreateUserRequest {
  name: string;
  password: string;
  github?: string;
}

export class CreateUserUseCase {
  constructor(private prismaUserRepository: PrismaUserRepository) {}

  async execute(request: CreateUserRequest)   {


    if(!request.name || request.name.length <= 3){
      throw new Error('O nome não foi fornecido ou muito curto')
    }




    if(!request.password || request.password.length <= 3){
      throw new Error('O nome não foi fornecido')
    }


    await this.prismaUserRepository.create({
      name: request.name,
      password: request.password,
      github: request.github,
    });
  }
}
