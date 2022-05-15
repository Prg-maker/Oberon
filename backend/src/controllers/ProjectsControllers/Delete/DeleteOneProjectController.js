const ProjectUseCase = require("../../../usecases/Project/ProjectUseCase")

class DeleteOneProjectController{
  async handle(req, res){

    const {id}  = req.body

    if(!id){
      return res.status(400).send({
        error:"id not passed"
      })
    }

    try{

      await ProjectUseCase.delete(id)
      
      return res.json({
        message:"project delete"
      }).status(201)
      
    }catch(err){
      return res.status(401).send({
        error: "project does not create"
      })
    }


  }
}

module.exports = DeleteOneProjectController