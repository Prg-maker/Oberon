const ProjectUseCase = require('../../../usecases/Project/ProjectUseCase')

class GetAllProjectsController{
  async handle(req , res){
    
    const userId= req.userId  
    
    if(!userId){
      return res.status(400).send({
        error:"userId does not exist"
      })
    }


    try{
      const projects = await ProjectUseCase.listAllProject(userId)

      return res.status(200).json(projects)
    }catch(err){
      return res.status(404).send({
        message:"Could not list projects"
      })
    }

  }
}

module.exports = GetAllProjectsController