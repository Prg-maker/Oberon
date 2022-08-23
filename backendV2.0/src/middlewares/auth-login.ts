import {Request , Response , NextFunction} from 'express';
import {verify} from 'jsonwebtoken';

interface ILogin{
  id:string;
  name:string;
}

export class AuthLogin{
  async auth(request:Request , response:Response, next:NextFunction){
    const authToken = request.headers.authorization ;


    if(!authToken){
      return response.status(404).json({
        message:"token invalid"
      })
    }

    const [, token] = authToken.split(' ')

    try{
      
      verify(token , `${process.env.jTW}` , (err , decoded)=> {
        console.log(decoded)
      }) 

    }catch({message}){
      return response.status(401).json({
        message
      })
    }

  }
}