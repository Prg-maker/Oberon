const AuthUseCase = require('../../../usecases/AuthUseCase')
const GenerateToken = require('../../../utils/GenerateToken')


class AuthLoginController {
  async handle(req , res){
    const {name , password} = req.body

    const Auth = {
      name,
      password
    }

    try{
      const user = await AuthUseCase.auth(Auth)
      delete user.password,
      delete user._id
      return res.json({
        user,
        token: GenerateToken(user)
      })
  
    }catch(err){
      return res.status(400).send({error: "password or name incorrect"})
    }

 
  }
}

module.exports  = AuthLoginController