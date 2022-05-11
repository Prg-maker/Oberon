const ProjectUseCase = require('../../../usecases/Project/ProjectUseCase')

class GetAllProjectsController{
  async handle(req , res){
    
    const userId= req.userId  

    try{
      const projects = await ProjectUseCase.listAllProject(userId)

      return res.status(200).json(projects)
    }catch(err){
      return res.status(404).send({
        message:"não foi póssivel listar os projetos"
      })
    }

  }
}

module.exports = GetAllProjectsController