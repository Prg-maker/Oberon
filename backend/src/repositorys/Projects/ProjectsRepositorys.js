const {v4} = require('uuid')

const {promisify} = require('util')

const { readFile, writeFile} = require('fs')

const writeFileAsync = promisify(writeFile)
const readFileAssync = promisify(readFile)
const UserRepository = require('../User/UserRepository')

class ProjectsRepositorys {

  constructor(){
    this.pathFile = './src/repositorys/Projects/projects.json',
    this.pathFileUser = './src/repositorys/User/user.json'

  }



  async getFileAndRead(){
    const file = await readFileAssync(this.pathFile)
    return JSON.parse(file.toString())
  }

  async getFileAndReadUser(){
    const file = await readFileAssync(this.pathFileUser)
    return JSON.parse(file.toString())
  }

  async writeFile(dados){
    await writeFileAsync(this.pathFile , JSON.stringify(dados))

    return true
  }
  async writeFileUser(dados){
    await writeFileAsync(this.pathFileUser , JSON.stringify(dados))

    return true
  }

  async createProject(project){

    const file = await this.getFileAndRead()



    try{

      const _id = v4()

      const [user_tempory] = await UserRepository.listOneUser(project.userId)
      console.log(user_tempory)

      const user = user_tempory

      const userFile = await UserRepository.deleteOne(user_tempory._id)
      
      const fileUser = await this.getFileAndReadUser()

      
      if(user == 'u'){
        throw new Error('user does not exist')
      }
      const projectId = {
        _id,
        ...project
      }
      const fileEnd = [
        ...file,
        projectId,
      ]

      user.projects.push(projectId)
      const userFileEnd = [
        ...fileUser,
        user
      ]
      await this.writeFile(fileEnd)
      await this.writeFileUser(userFileEnd)
      return fileEnd
    }catch(err){
      throw new Error('not create project, try again')
    }
  }



  async listAllProjectUser(userId){
    const file = await this.getFileAndRead()
    

    const userAllProject = file.filter(project => project.userId == userId)

    if(userAllProject == 0 ){
      return {message: "The user does not have any a project"}
    }
    return userAllProject
  }


  async listOneProject(_id){
    




    try{

      if(!_id){
        return {
          message: "the id was not passed"
        }
      }

      const file = await this.getFileAndRead()

      const project = file.filter(project => project._id == _id) 
  
      if(project == 0){
        return {
          message: "project does not exist"
        }
      }
  
      return project

    }catch(err){
      throw new Error('could not list project')
    }
  
    
  }

  async deleteOneProject(_id){
    const file = await this.getFileAndRead()

    const index = file.findIndex(item => item._id == _id)
    console.log(index)
    if(index == -1){
      console.log('aqui')
      throw Error('project does not exist')
    }

    file.splice(index , 1)
    await this.writeFile([...file])
    console.log('aqui')

    return true
  }

 
}

module.exports = new ProjectsRepositorys()