const UserServices = require('../../../usecases/User/UserUseCase')


const GenerateToken = require('../../../utils/GenerateToken')

class UserController{

  

  async handle(req, res){
    const {name , password ,nameGithub }  = req.body


    try{
     
      const user = {
        name,
        password,
        nameGithub,
        projects:[]
      }
  
      const UserCreate = await UserServices.create(user)
      
      const id = UserCreate._id
      
      delete UserCreate.password
      
      return res.json({
        UserCreate,
        token: GenerateToken({id})
      })
  
    }catch(err){
      return res.status(400).send({
        message:'User not create,  try with another name'
      })
    }

   
  }
}

module.exports = UserController