const User = require('../repositorys/User/UserRepository')

class UserServices{ 
  

  async create(user){

    try{ 

      if(!user){
        throw Error('user was not create')
      }
      
      const [response] = await User.createUser(user)
      return response
    }catch(err){
      throw Error('could not create user')
    }

  }

  async listOneUser(userId){
    const response = await User.listOneUser(userId)

    if(!userId){
      throw Error('user  not exist')
    }
    return response
    
  }

  async listAllUser(){
    const response = await User.listAllUsers()

    return response
  } 

  async delete(userId){
    const response = await User.deleteOne(userId)

    if(!userId){
      throw Error('user  not exist')
    }
    console.log(response)
    return true
  }
  
}

module.exports = new UserServices()