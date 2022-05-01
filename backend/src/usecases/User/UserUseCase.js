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

    const user = await UserRepository.listOneUser(userId)

    return user
   
  }

  async listAllUser(){
    const users = await UserRepository.listAllUsers()

    return users
    
  } 

  async delete(userId){


    const user = await UserRepository.deleteOne(userId)
    return user
  }
  
}

module.exports = new UserUseCase()