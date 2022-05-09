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
      console.log('aqui')
      return {
        message: "it was not possible create project"
      }
    }

    
  }
  listAllProject(userId){

  }
  listOneProject(id){

  }
  delete(id){

  }
}

module.exports = new ProjectUseCase()