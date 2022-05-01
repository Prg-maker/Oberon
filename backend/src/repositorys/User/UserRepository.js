
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

 
      return users

    }catch(err){
      throw new Error('Could not list all users')
    }
  }

  async listOneUser(_id){

    try{
      const user = await prismaClient.user.findUnique({
        where:{
          id: _id
        }
      })
  
      if(user == null){
        return {
          message: "user does not exist"
        }
      }
  
      return user
    }catch(err){
      throw new Error('does not possible to list user ')
    }
  } 


  async deleteOne(id){


   


    try{

      const userDelete = await prismaClient.user.delete({
        where:{
          id
        }
      })


      return userDelete

      

    }catch(err){
      throw new Error('User does not exist')
    }
   
  }

  
 
}

module.exports = new UserRepository()