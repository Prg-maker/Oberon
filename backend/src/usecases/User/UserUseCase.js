const User = require('../../repositorys/User/UserRepository')

class UserServices{ 
  
  constructor(){
    this.user = []
  }
  async create(user){


    await User.validateOfName(user.name)
    const [response] = await User.createUser(user)
    return response
  }

  async listOneUser(userId){
    const response = await User.listOneUser(userId)
    return response
  }

  async listAllUser(){
    const response = await User.listAllUsers()
    return response
  } 

  async delete(userId){
    const response = await User.deleteOne(userId)
    return response
  }
  
}

module.exports = new UserServices()