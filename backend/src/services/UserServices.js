const User = require('../repositorys/User/UserRepository')

class UserServices{ 
  
  constructor(){
    this.user = []
  }

  async create(user){
   
    try{ 

      if(!user){
        throw Error('user was not create')
      }

      await User.validateOfName(user.name)
    
      
      const [response] = await User.createUser(user)
      
      return response
    }catch(err){
      throw Error('could not create user')
    }
  }

  async listOneUser(userId){

    try{
      
      if(!userId){
        throw Error('user  not exist')
      }
      const response = await User.listOneUser(userId)
   
      return response
      
    }catch(err){
      throw Error('it was not possible to list the user')
    }

  }

  async listAllUser(){

    try{

      const response = await User.listAllUsers()
      if(response == 0){
        return 'no have users'
      }
      return response

    }catch(err){
      throw Error('it was not possible to list the users')
    }
  
  } 

  async delete(userId){

    try{
      if(!userId){
        throw Error('user  not exist')
      }

      const response = await User.deleteOne(userId)
   
      return true

    }catch(err){
      throw Error('not was possible to delete the user ')
    }

  }
  
}

module.exports = new UserServices()