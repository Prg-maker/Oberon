
const {v4} = require('uuid')
const {promisify} = require('util')


const { readFile, writeFile} = require('fs')
const writeFileAsync = promisify(writeFile)
const readFileAssync = promisify(readFile)

class UserRepository {
  constructor(){
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

      const _id = v4()
      if(dados.filter(item => item._id == _id ) == 0){

        const userId = {
          _id,
          ...user
        }
        
        const dadosEnd = [
          userId,
          ...dados
        ]
        
        await this.writeFile(dadosEnd)
        return dadosEnd
      }
    }catch(err){
      throw new  Error('user not create' )
    }
  }


  async listAllUsers(){

    try{
      const file = await this.getFileAndRead()

      if(file == 0){
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

      if(user == 0 ){
        return 'user not exist, try again'
      }
      return user
    }catch(err){
      throw Error('no is possible to list user')
    }
  }
  async deleteOne(_id){
    try{
      const file = await this.getFileAndRead()

      const [user] = await this.listOneUser(_id)

      const index = file.findIndex(item => item._id == _id)

      if(index == -1){
        throw Error('user not exist')
      }
      file.splice(index , 1)
      await this.writeFile([...file])
      return user

    }catch(err){
      throw Error('user not delete')
    }
  }
  
  async validateOfName(name){
    const users  = await this.listAllUsers()
    const validate = users.filter(user => user.name == name )

    // validando se o validate é diferente de 0, que no caso vazio, caso seja diferente de vazio
    // retorna um erro 
    //validating if the validate is different from 0, which in the empty case, in case it is different from empty
    //to return error

    if(validate != 0){  
      throw new Error('the name is already being used')
    } 


    return

  }
}

module.exports = new UserRepository()