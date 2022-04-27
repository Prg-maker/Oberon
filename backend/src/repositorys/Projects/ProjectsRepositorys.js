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


  async createProject(project){
    const file = await this.getFileAndRead()
    const users = await this.getFileAndReadUser()
    try{
      
      if(!project.userId){
        throw new Error('project cannot be created, because user does not exist')
      }

      const _id = v4()

      const [user] = await UserRepository.listOneUser(project.userId)

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

      const userProject = user.projects.push(projectId)

      const usersFileEnd = {
        userProject,
        ...users
      }
      
      await this.writeFile(usersFileEnd)
      await this.writeFile(fileEnd)

      return fileEnd
     
    }catch(err){
      throw Error('not create project, try again')
    }


  }

 
}

module.exports = new ProjectsRepositorys()