const UserServices = require('../../../usecases/User/UserUseCase')


class ListUserController {
  async handle(req , res){
    try{
      const _id = req.params.id

      const user = await UserServices.listOneUser(_id)
      
      delete user.password
      
      return res.json(user)
      
    }catch(er){

    }

  }
}

module.exports  = ListUserController