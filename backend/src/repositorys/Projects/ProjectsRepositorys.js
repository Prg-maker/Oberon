const crypto = require('crypto')

const {promisify} = require('util')

const { readFile, writeFile} = require('fs')

const writeFileAsync = promisify(writeFile)
const readFileAssync = promisify(readFile)


class ProjectsRepositorys {

  constructor(){
    this._id  = crypto.randomUUID(),
    this.pathFile = './src/repositorys/Projects/projects.json'
  }
b



  async getFileAndRead(){
    const file = await readFileAssync(this.pathFile)
    return JSON.parse(file.toString())
  }

  async writeFile(dados){
    await writeFileAsync(this.pathFile , JSON.stringify(dados))

    return true
  }

  async createProject(project){
    const file = await this.getFileAndRead()

    try{

      const _id = this._id

      const projectAlredyExist = file.filter(item => item.id == _id )

      if(projectAlredyExist == []){
        throw Error('project alredy exist')
      }

      const projectAddId = {
        _id,
        ...project
      }

      const fileEnd = [
        ...file,
        projectAddId
      ]

      await this.writeFile(fileEnd)

      return fileEnd
    }catch(err){
      throw Error('not create project, try again')
    }


  }

  async listOneProject(projectId){

    try{
      const file = await this.getFileAndRead()

      const project = file.filter(project => project._id ==  projectId)
      
      if(project == []){
        throw Error('project not exist')
      }
  
      return project
      
    }catch(err){
      throw Error('Project not list')
    }

  }

  async listAllProject(projectId){

    try{
      const file = await this.getFileAndRead()

      
      if(file == []){
        throw Error('projects not exists')
      }
  
      return file
      
    }catch(err){
      throw Error('Projects not list')
    }
  }

  async delete(projectId){
    const file = await this.getFileAndRead()

    const index = file.findIndex(item => item._id == projectId )

    if(index == -1){
      throw Error('project not exist')
    }

    file.splice(index , 1)

    await this.writeFile([...file])


    return true
  }
}

module.exports = new ProjectsRepositorys()