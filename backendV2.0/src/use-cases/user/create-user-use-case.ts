import { PrismaUserRepository } from "../../repository/prisma/prisma-user-repository";

interface CreateUserRequest{
  name: string;
  password:string;
  github:string;
}


export class CreateUserUseCase{

  constructor(
    private prismaUserRepository: PrismaUserRepository
  ){}

  execute(request: CreateUserRequest){

    try{
      this.prismaUserRepository.create({
        name:request.name,
        password:request.password,
        github: request.github
      })
    }catch(err){
      throw new Error('user not create')
    }
  }
}