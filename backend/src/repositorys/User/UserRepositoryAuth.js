const UserRepository = require("./UserRepository")
const bcrypto = require('bcrypt')


class UserRepositoryAuth{

  async getFileAndRead(){
    const file = await readFileAssync(this.pathFile)
    return JSON.parse(file.toString())
  }



  async getUserForName(name){

    const users = await UserRepository.listAllUsers()
    console.log(name)
    const user = users.filter(user => user.name == name )


    return user


  }

}


module.exports = new UserRepositoryAuth()