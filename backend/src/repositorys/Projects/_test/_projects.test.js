const ProjectsRepositorys = require('../ProjectsRepositorys')
const UserRepository = require('../../User/UserRepository')

const Project_Test = {
  "userId": "0646f0eb-9e2f-4ceb-91b7-583c6e99b3ed",
  "title": "Oberon",
  "details":"projeto para monitorar todos os meus projetos",
  "repositoryGit":"https://github.com/Prg-maker/Oberon",
  "progress":"init",
  "createdAt":"2022-04-15T15:12:33.094Z",
  "updatedAt":"2022-04-15T15:12:33.094Z"
}
const Project_Test_fake = {
  "userId": "066c2f0c-eeaa-4c72-b092-153c7aecaff8",
  "title": "test+5",
  "details":"projeto para monitorar todos os meus projetos",
  "repositoryGit":"https://github.com/Prg-maker/Oberon",
  "progress":"init",
  "createdAt":"2022-04-15T15:12:33.094Z",
  "updatedAt":"2022-04-15T15:12:33.094Z"
}



describe('testing project' , ()=> {
  it('should return one error if id userId  does not exist' , async ()=> {
    //const [sut] = await ProjectsRepositorys.createProject(Project_Test_fake)

    //expect(sut).toBeTruthy()
  })

  it('should get user, returned an error if he does not exist', async ()=>{
   // const sut = await ProjectsRepositorys.createProject(Project_Test)
    //const [user] = await UserRepository.listOneUser(Project_Test.userId)
    //expect(sut).toEqual(user)
  })

  it('should create one project' , async ()=> {
    //const [sut] = await ProjectsRepositorys.createProject(Project_Test_fake)
    //expect(sut.userId).toEqual(Project_Test_fake.userId)
   //expect(sut.title).toEqual(Project_Test_fake.title)

  })

  it('should return one message if the user has no project, the user does not have any a project' , async ()=> {
    const sut = await ProjectsRepositorys.listAllProjectUser(Project_Test.userId)


    //expect(sut).toEqual({message: "The user does not have any a project"})

  })

  it('Should must list all projects, by userId' , async ()=> {
    const sut = await ProjectsRepositorys.listAllProjectUser('e465b9c1-b9d9-4b56-85e4-a80f12eed2cc')
    
    expect(sut).toEqual([
      {
        "_id": "e465b9c1-b9d9-4b56-85e4-a80f12eed2cc",
        "userId": "066c2f0c-eeaa-4c72-b092-153c7aecaff8",
        "title": "test+5",
        "details": "projeto para monitorar todos os meus projetos",
        "repositoryGit": "https://github.com/Prg-maker/Oberon",
        "progress": "init",
        "createdAt": "2022-04-15T15:12:33.094Z",
        "updatedAt": "2022-04-15T15:12:33.094Z"
      }
    ])
  })

})