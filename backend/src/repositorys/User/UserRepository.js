
const crypto = require('crypto')

const {promisify} = require('util')

const { readFile, writeFile} = require('fs')

const writeFileAsync = promisify(writeFile)
const readFileAssync = promisify(readFile)

class UserRepository {

  constructor(){
    this._id = crypto.randomUUID(),
    this.pathFile = './src/repositorys/User/user.json'
  }



  async getFileAndRead(){
    const file = await readFileAssync(this.pathFile)
    return JSON.parse(file.toString())
  }

  async writeFile(dados){
    await writeFileAsync(this.pathFile , JSON.stringify(dados))

    return true
  }

  async createUser(user ){
    const dados = await  this.getFileAndRead()

    try{
      
      if(!user){
        throw  Error('user not passed, try again')
      }

      const _id = this._id

      const userId = {
        _id,
        ...user
      }

      const dadosEnd = [
        ...dados,
        userId
      ]

      
      await this.writeFile(dadosEnd)

      return dadosEnd
    }catch(err){
      throw new  Error('user not create' )
    }
  }
  async listAllUsers(){
    try{

      const file = await this.getFileAndRead()
      if(file == []){
        return 'not have   users'
      }

      return file
    }catch(err){
      throw Error('no is possible to list user')
    }
  }

  async listOneUser(_id){
 
    try{
      const file = await this.getFileAndRead()
      const user = file.filter(user =>  user._id === _id)
      return user

    }catch(err){
      throw Error('no is possible to list user')
    }
  }

  async deleteOne(_id){
    try{
      const file = await this.getFileAndRead()

      const index = file.findIndex(item => item._id == _id)

      if(index == -1){
        throw Error('user not exist')
      }
      file.splice(index , 1)
  
  
      await this.writeFile([...file])
      return true

    }catch(err){
      throw Error('user not delete')
    }
  }



}

module.exports = new UserRepository()