
const UserServices = require('../../../services/UserServices')

class ListAllUserController{
  async handle(req , res){
    try{
      const users = await UserServices.listAllUser()

      users.map(user => {
        delete user.password
      })

      return res.json(users)

    }catch(err){
      return res.status(400).send({message: "error, lists users"})
    }
  }
}

module.exports  = ListAllUserController