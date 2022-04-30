
const {v4} = require('uuid')
const bcrypt = require('bcrypt')
const prismaClient = require('../../database/prisma')


class UserRepository {



  async createUser(user){
    try{

      const {name , password ,  nameGithub } = user
      const userAlredyExist = await prismaClient.user.findFirst({
        where:{
          name
        }
      })
  
      if(!userAlredyExist){
        const HashPassword = await bcrypt.hash(password , 10)
        const userCreate = await prismaClient.user.create({
          data:{
            name,
            password: HashPassword,
            nameGithub
          }
        })
        return userCreate
      }

      return {
        message: "could not create user"
      }
    }catch(err){
      throw new Error('could not create user')
    }
  }


  async listAllUsers(){

    try{

      const users = await prismaClient.user.findMany()

      if(!users){
        return {
          message: "There are no users"
        }
      }
  
      return users

    }catch(err){
      throw new Error('Could not list all users')
    }
  }

  async listOneUser(_id){
    try{

      const file = await this.getFileAndRead()
      const user = file.filter(user =>  user._id === _id)

      if(user == 0 ){
        return 'user not exist, try again'
      }
      return user
    }catch(err){
      throw Error('no is possible to list user')
    }
  }
  async deleteOne(_id){
    try{
      const file = await this.getFileAndRead()

      const [user] = await this.listOneUser(_id)

      const index = file.findIndex(item => item._id == _id)

      if(index == -1){
        throw Error('user does not exist')
      }
      file.splice(index , 1)
      await this.writeFile([...file])
      return user

    }catch(err){
      throw Error('user not delete')
    }
  }
  
 
}

module.exports = new UserRepository()