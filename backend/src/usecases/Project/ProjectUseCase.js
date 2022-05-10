const Project = require('../../repositorys/Projects/ProjectsRepositorys')

class ProjectUseCase{

  async create(data){


    if(!data.userId){
      return {
        message: "userId, not way passed"
      }
    }

    try{
      const response = await Project.createProject(data)

      return response
      
    }catch(err){
      return {
        message: "it was not possible create project"
      }
    }

    
  }
  async listAllProject(userId){

    if(!userId){
      return {
        message: "userId, not way passed"
      }
    }


    const projects = await Project.listAllProjectUser(userId)

    if(projects.data == 0){
      return {
        message: "this user have none project"
      }
    }

    return projects

   

  }
  async listOneProject(id){


    if(!id){
      return {
        message: "userId, not way passed"
      }
    }

    const project = await Project.listOneProject(id)

    if(!project){
      return {
        message: "project does not exist"
      }
    }
    
    return project

  

  }
  async delete(id){

    if(!id){
      return {
        message: "userId, not way passed"
      }
    }

    const project = await Project.deleteOneProject(id)
    
    if(project != true){
      return {
        message:"was not possible to delete  project"
      }
    }

    return project



  }
}

module.exports = new ProjectUseCase()