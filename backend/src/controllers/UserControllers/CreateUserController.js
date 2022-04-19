const UserServices = require('../../services/UserServices')
const crypto = require('crypto')
const GenerateToken = require('../../utils/GenerateToken')


class UserController{

  

  async handle(req, res){
    const {name , password ,nameGithub }  = req.body


    try{
      
      const HashPassword = crypto.createHash('md5').update(password).digest('hex')
    
      const user = {
        name,
        password:HashPassword ,
        nameGithub,
        projects:[]
      }
  
      const UserCreate = await UserServices.create(user)
      
      const id = UserCreate._id
  
      delete UserCreate._id 
      delete UserCreate.password
      
      return res.json({
        UserCreate,
        token: GenerateToken({id})
      })
  
    }catch(err){
      return res.status(400).send({
        message:'User not create, try again'
      })
    }

   
  }
}

module.exports = UserController