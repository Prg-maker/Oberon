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
   
  }


  async listOneProject(_id){
    


  
    
  }

  async deleteOneProject(_id){
   
  }

 
}

module.exports = new ProjectsRepositorys()