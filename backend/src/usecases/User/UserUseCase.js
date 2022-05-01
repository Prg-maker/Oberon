const UserRepository = require('../../repositorys/User/UserRepository')

class UserUseCase{ 
  

  async create(user){



    const User = await UserRepository.createUser(user)

    if(User== undefined){
      return {
        message: "user does not create"
      }
    }

    return User

  }

  async listOneUser(userId){
   
  }

  async listAllUser(){
 
  } 

  async delete(userId){

  }
  
}

module.exports = new UserUseCase()