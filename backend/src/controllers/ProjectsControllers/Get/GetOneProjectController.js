const ProjectUseCase = require('../../../usecases/Project/ProjectUseCase')

class GetOneProjectsController{
  async handle(req , res){
    
    const id = req.params.id
    

    if(!id){
      return res.status(400).send({
        error:"id not passed"
      })
    }

    try{
      const project = await ProjectUseCase.listOneProject(id)

      return res.status(200).json(project)
    }catch(err){
      return res.status(404).send({
        message:"Could not list project"
      })
    }

  }
}

module.exports = GetOneProjectsController