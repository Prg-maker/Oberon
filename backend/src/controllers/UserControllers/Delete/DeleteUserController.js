const UserServices = require('../../../usecases/User/UserUseCase')



class DeleteUserController{
  async handle(req ,res){

    try{
      const {id} = req.body
      const tryDeleteUser = await UserServices.delete(id) 
  
      return res.json(tryDeleteUser)
    }catch(err){
      return res.status(400).send({
        message:'user away  not delete'
      })
    }
   

  }
}

module.exports = DeleteUserController