const ProjectsRepositorys = require('../ProjectsRepositorys')


const Project_Test_fake = {
  "userId": "015c5cbe-ba3f-4839-98a6-5e18551e1c7d",
  "title": "test+5",
  "details":"projeto para monitorar todos os meus projetos",
  "repositoryGit":"https://github.com/Prg-maker/Oberon",
  "progress":"init",
  "createdAt":"2022-04-15T15:12:33.094Z",
  "updatedAt":"2022-04-15T15:12:33.094Z"
}

const Project_Test_fake_not_userId = {
  "title": "test+5",
  "details":"projeto para monitorar todos os meus projetos",
  "repositoryGit":"https://github.com/Prg-maker/Oberon",
  "progress":"init",
  "createdAt":"2022-04-15T15:12:33.094Z",
  "updatedAt":"2022-04-15T15:12:33.094Z"
}
describe('testing project' , ()=> {

  it('should get user, returned an error if he does not exist', async ()=>{
   
    const sut = ProjectsRepositorys.createProject(Project_Test_fake_not_userId)

    expect(sut).rejects.toThrow()

  })

  it('should verify if user does exist' , async ()=> {
    return ProjectsRepositorys.createProject({userId: "fake"}).catch(sut => {
      expect(sut).rejects.toThrow()
    })
  })

  it('should create one project' , async ()=> {
    const sut = await ProjectsRepositorys.createProject(Project_Test_fake)

    expect(sut).toBeTruthy()
  })

  it('should return one message if the user has no project, the user does not have any a project' , async ()=> {
   

  })

  it('Should must list all projects, by userId' , async ()=> {
   
  })

  it('should validate if the id is passed' , async () => {
  
  })

  it('Should validate if the project exist, if he does not exist, return one error ' ,async () => {
   

  })

  it('Should get one project by id' , async ()=> {
 

  })

  it('Should delete one project by id' , async ()=> {


  })

})