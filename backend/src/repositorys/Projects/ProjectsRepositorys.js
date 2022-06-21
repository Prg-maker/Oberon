const {v4} = require('uuid')
const prismaClient = require('../../database/prisma')

class ProjectsRepositorys {

  async createProject(project){

    if(!project.userId){
      throw new Error('user not exist')
    }

    try{

      const {
        userId,
        title,
        details,
        repositoryGit,
        progress,
        createdAt,
        updatedAt
      } = project
  
      await prismaClient.projects.create({
        data:{
          userId,
          title,
          details,
          repositoryGit,
          progress,
          createdAt,
          updatedAt
        }
      })

      return true

    }catch(err){
      return {
        error:"error when creating a project"
      }
    }
  }


  async listAllProjectUser(userId){

    if(!userId){
      throw new Error('the userId was not passed')
    }


    try{
      const projects = await prismaClient.projects.findMany({
        where:{
          userId
        }
      })
      return projects
    }catch(err){
      return {
        error: "user does not exist"
      }
    }



  }


  async listOneProject(id){
    
    if(!id){
      throw new Error('id did not pass ')
    }


    try{
      const projects = await prismaClient.projects.findFirst({
        where:{
          id
        }
      })

      return projects

    }catch(err){
      return {
        error:"project dost not exist"
      }
    }
  }

  async deleteOneProject(id){

    if(!id){
      return {
        message: "id was not passed"
      }
    }

    try{

      await prismaClient.projects.delete({
        where:{
          id
        }
      })

      return true

    }catch(err){
      return {
        message:"project does not exist"
      }
    }
   
  }
 
}

module.exports = new ProjectsRepositorys()