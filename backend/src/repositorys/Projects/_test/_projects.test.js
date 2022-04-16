const Project = require('../ProjectsRepositorys')

const project = {
  "userId": "3c740ec1-7c96-40f6-80df-e8d81d3669a1",
  "_id": "1",
  "title": "Oberon",
  "details":"projeto para monitorar todos os meus projetos",
  "repositoryGit":"https://github.com/Prg-maker/Oberon",
  "progress":"init",
  "createdAt":"2022-04-15T15:12:33.094Z",
  "updatedAt":"2022-04-15T15:12:33.094Z"
}

const Project_Test = {
  "userId": "3c740ec1-7c96-40f6-80df-e8d81d3669a1",
  "title": "Oberon",
  "details":"projeto para monitorar todos os meus projetos",
  "repositoryGit":"https://github.com/Prg-maker/Oberon",
  "progress":"init",
  "createdAt":"2022-04-15T15:12:33.094Z",
  "updatedAt":"2022-04-15T15:12:33.094Z"
}


describe('testing project' , ()=> {
  it('should create new project' , async ()=> {

    const project = await Project.createProject(Project_Test)
    expect(project).toBeTruthy()
  })

  it('should one list project for id' , async  ()=> {
    const [project] = await Project.listOneProject('1')
    expect(project).toEqual(project)
  })

  it('shoud list all project' , async ()=> {
    const projects = await Project.listAllProject()
    expect(projects).toBeTruthy()

  })

  it('should delete one project for id' , async () => {
    const projectDelete = await Project.delete('33a3664e-d54f-4981-bfbe-834493ffa536')


  
    expect(projectDelete).toBeTruthy()
  })
})