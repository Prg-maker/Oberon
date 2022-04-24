const UserRepository = require("./UserRepository")
const bcrypto = require('bcrypt')


class UserRepositoryAuth{

  async getFileAndRead(){
    const file = await readFileAssync(this.pathFile)
    return JSON.parse(file.toString())
  }



  async getUserForName(name){

    const users = await UserRepository.listAllUsers() 
    
    const user = users.filter(user => user.name === name )
    if(user == 0){
      throw new Error('user not exist')
    }

    return user


  }

}


module.exports = new UserRepositoryAuth()