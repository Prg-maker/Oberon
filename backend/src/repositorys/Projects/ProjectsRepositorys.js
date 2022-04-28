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
      if(!project.userId){
        throw new Error('project cannot be created, because user does not exist')
      }
      const _id = v4()
      const [user_tempory] = await UserRepository.listOneUser(project.userId)
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
        projectId,
        ...file
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
      throw Error('not create project, try again' )
    }
  }



  async listAllProjectUser(userId){
    const file = await this.getFileAndRead()
    

    const userAllProject = file.filter(project => {
      console.log(project.userId)
    })

    if(userAllProject == 0 ){
      return {message: "The user does not have any a project"}
    }
    return userAllProject
  }
 
}

module.exports = new ProjectsRepositorys()