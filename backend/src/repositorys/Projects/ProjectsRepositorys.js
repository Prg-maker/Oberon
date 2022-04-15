const crypto = require('crypto')

class ProjectsRepositorys {

  constructor(){
    this._id  = crypto.randomUUID(5)
  }

  async createProject(project){

  }

  async listProject(projectId){

  }
}

module.exports = new ProjectsRepositorys()