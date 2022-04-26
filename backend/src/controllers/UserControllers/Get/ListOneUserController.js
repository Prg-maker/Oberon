const UserServices = require('../../../services/UserServices')


class ListUserController {
  async handle(req , res){

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