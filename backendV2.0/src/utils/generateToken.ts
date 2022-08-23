import  {sign} from 'jsonwebtoken'

interface ISing{
  id:string;
  name:string;
  password:string;
  github?:string
}


export class GenerateToken{
  generate(params:ISing){ 
    return sign(params , `${process.env.JTW}` , {
      expiresIn:"1d"
    })
  }
}