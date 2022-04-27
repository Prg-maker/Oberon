const UserAuthRepository = require('../repositorys/User/UserRepositoryAuth')  

class AuthUseCase{
  async auth(userPass){
    const user = await UserAuthRepository.validateUser(userPass)
    
    return user
  }
}

module.exports = new AuthUseCase()