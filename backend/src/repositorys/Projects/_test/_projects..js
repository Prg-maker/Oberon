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
  "userId": "066c2f0c-eeaa-4c72-b092-153c7aecaff9",
  "title": "test+5",
  "details":"projeto para monitorar todos os meus projetos",
  "repositoryGit":"https://github.com/Prg-maker/Oberon",
  "progress":"init",
  "createdAt":"2022-04-15T15:12:33.094Z",
  "updatedAt":"2022-04-15T15:12:33.094Z"
}

const project =  {
  "_id": "c4dc72c6-165f-462b-9be4-8ca7e02d4b21",
  "userId": "066c2f0c-eeaa-4c72-b092-153c7aecaff9",
  "title": "test+5",
  "details": "projeto para monitorar todos os meus projetos",
  "repositoryGit": "https://github.com/Prg-maker/Oberon",
  "progress": "init",
  "createdAt": "2022-04-15T15:12:33.094Z",
  "updatedAt": "2022-04-15T15:12:33.094Z"
}



describe('testing project' , ()=> {
  it('should get user, returned an error if he does not exist', async ()=>{

    /*const sut = await ProjectsRepositorys.createProject(Project_Test)
    console.log(sut , 'sut')
    const [user] = await UserRepository.listOneUser(Project_Test.userId)
    expect(sut).toEqual(user)*/
  })

  it('should create one project' , async ()=> {

    const [sut] = await ProjectsRepositorys.createProject(Project_Test_fake)
    console.log(sut , 'sut')
    expect(sut.title).toEqual(Project_Test_fake.title)

  })

  it('should return one message if the user has no project, the user does not have any a project' , async ()=> {
    const userId_fake = 'userId_fake'
    
    const sut = await ProjectsRepositorys.listAllProjectUser(userId_fake)


    expect(sut).toEqual({message: "The user does not have any a project"})

  })

  it('Should must list all projects, by userId' , async ()=> {
    const [sut] = await ProjectsRepositorys.listAllProjectUser('066c2f0c-eeaa-4c72-b092-153c7aecaff8')
    
    expect(sut).toEqual(
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
    )
  })

  it('should validate if the id is passed' , async () => {
    const sut = await ProjectsRepositorys.listOneProject('')
    
    expect(sut).toEqual({
      message: "the id was not passed"
    })

  })

  it('Should validate if the project exist, if he does not exist, return one error ' ,async () => {
    const sut = await ProjectsRepositorys.listOneProject('1')
    
    expect(sut).toEqual({
      message: "project does not exist"
    })

  })

  it('Should get one project by id' , async ()=> {
    const [sut] = await ProjectsRepositorys.listOneProject(project._id)

    expect(sut).toEqual(project)

  })

  it('Should delete one project by id' , async ()=> {
    const [sut] = await ProjectsRepositorys.deleteOneProject('e465b9c1-b9d9-4b56-85e4-a80f12eed2cc')
    console.log(sut)
    expect(sut).toBeTruthy()

  })

})