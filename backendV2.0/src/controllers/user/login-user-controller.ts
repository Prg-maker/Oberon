import { Response } from "express";

interface Request{
  body:{
    name:string;
    password:string;
  }
}

export class LoginUserController{
  async handle(request:Request, response:Response){
    
  }
}