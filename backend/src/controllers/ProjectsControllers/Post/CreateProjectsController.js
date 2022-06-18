const ProjectUseCase = require("../../../usecases/Project/ProjectUseCase")

class CreateProjectController{
  async handle(req, res){

    const userId = req.userId
    console.log(userId)
    if(!userId){
      return res.status(400).send({
        error:"userId does not exist"
      })
    }

    const { title , details , repositoryGit , progress ,  } = req.body

    if(!title || !details){
      return res.status(400).send({
        error: "title or details was not passed"
      })
    }

    try{
      const project = {
        userId,
        title,
        details,
        repositoryGit,
        progress
      } 
      await  ProjectUseCase.create(project)
      
      return res.json({
        message: 'project created'
      }).status(201)

      

    }catch(err){
      return res.status(400).send({
        message: "The project was not created, try again"
      })
    }

  }
}
module.exports = CreateProjectController