const crypto = require('crypto')

const User = require('../../../services/UserServices')

class AuthLoginController {
  async handle(req , res){
    const {name, password} = req.body

    const user = await User.listAllUser() 


  }
}

module.exports  = AuthLoginController