const UserRepository = require("./UserRepository")

const bcrypto = require('bcrypt')

class UserRepositoryAuth{


  async validateUser(userPass){   
    try{
      const [user] = await this.getUserForName(userPass.name)
      const {password} = user

      if(!await bcrypto.compare(userPass.password, password)){
        throw new Error('user Invalid password')
      }
      return true

    }catch(err){
      throw new Error('user has not been passed')
    }


  }

  async getUserForName(name){

    try{
      const users = await UserRepository.listAllUsers() 
      const user = users.filter(user => user.name === name )
      return user

    }catch(err){
      throw new Error('could not find the user')
    }
  }

}


module.exports = new UserRepositoryAuth()