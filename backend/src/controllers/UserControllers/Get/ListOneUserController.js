const UserServices = require('../../../usecases/User/UserUseCase')


class ListUserController {
  async handle(req , res){
    const userId = req.userId
    console.log(userId)
    
    try{
      const _id = req.params.id

      const user = await UserServices.listOneUser(_id)
      
      delete user[0].password
      
      return res.json(user)
      
    }catch(er){

    }

  }
}

module.exports  = ListUserController