const crypto = require('crypto')

const {promisify} = require('util')
const path = require('path')

const { readFile, writeFile} = require('fs')

const writeFileAsync = promisify(writeFile)
const readFileAssync = promisify(readFile)

class UserRepository {

  constructor(){
    this._id = crypto.randomUUID(),
    this.pathFile = './src/repositorys/user.json'
  }




  async getFileAndRead(){
    const file = await readFileAssync(this.pathFile)
    return JSON.parse(file.toString())
  }

  async writeFile(dados){
    await writeFileAsync(this.pathFile , JSON.stringify(dados))

    return true
  }
  async createUser(user){
    const dados = await  this.getFileAndRead()


    try{
      
      if(!user){
        throw  Error('user not passed, try again')
      }
      const userId = {
        _id: this._id,
        ...user
      }
      const dadosEnd = [
        ...dados,
        userId
      ]

      const response = await this.writeFile(dadosEnd)

      return response
      

    }catch(err){
      throw new  Error('user not create' )
    }

  }






}

module.exports = new UserRepository()