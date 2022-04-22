const crypto = require('crypto')


class AuthLoginController {
  async handle(req , res){
    const {name, password} = req.body

    crypto.getHashes
  }
}

module.exports  = AuthLoginController