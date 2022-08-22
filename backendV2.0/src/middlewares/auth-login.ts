import {Request , Response , NextFunction} from 'express';
import jwt from 'jsonwebtoken';

interface ILogin{
  id:string;
  name:string;
  password:string;
}

export class AuthLogin{
  async auth(request:Request , response:Response, next:NextFunction){
    const authToken = request.headers.authorization ;


    if(!authToken){
      return response.status(404).json({
        message:"token invalid"
      })
    }

    const [,token] = authToken.split('')


    try{
      const data = jwt.verify(token , `${process.env.JWT}`) as ILogin

      request.headers.user
      console.log(data)
      
    }catch(err){

    }
  }
}