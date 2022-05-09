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

  it('should verify if the user dost exist' , async ()=> {
    const sut = ProjectsRepositorys.listAllProjectUser('')

    expect(sut).rejects.toBeTruthy()

  })

  it('should verify if the user dost exist' , async ()=> {
    return ProjectsRepositorys.listAllProjectUser({userId: ""}).catch(sut => {
      expect(sut).rejects.toThrow()
    })

  })

  it('Should must list all projects, by userId' , async ()=> {
    const userId = '015c5cbe-ba3f-4839-98a6-5e18551e1c7d'
    const sut = await ProjectsRepositorys.listAllProjectUser(userId)


    expect(sut.data[0].userId).toBe(userId)
  })




  it('should validate if the id is passed' , async () => {
    return ProjectsRepositorys.listOneProject({id: ""}).catch(sut => {
      expect(sut).toThrow()
    })

  })

  it('Should validate if the project exist, if he does not exist, return one error ' ,async () => {
    
    return ProjectsRepositorys.listOneProject({id: "1"}).catch(sut => {
      expect(sut).rejects.toThrow()
    })

  })

  it('Should get one project by id' , async ()=> {

    const userId = '015c5cbe-ba3f-4839-98a6-5e18551e1c7d'
    const id = '9748d664-d4c0-4d2d-bd61-a1b366b6cc46'
    
    const sut = await ProjectsRepositorys.listOneProject(id)


    expect(sut.id).toBe(id)
    expect(sut.userId).toBe(userId)
  })


  /*delete*/

  it('should check if the id was passed' ,async () => {
       
    return ProjectsRepositorys.deleteOneProject('').catch(sut => {
      expect(sut).rejects.toThrow()
    })

  })

  it('should check if the project exists' ,async () => {
      
    return ProjectsRepositorys.deleteOneProject('12').catch(sut => {
      expect(sut).rejects.toThrow({
        message:"project does not exist"
      })
    })

  })
  
  it('Should delete one project by id' , async ()=> {
    const sut = await ProjectsRepositorys.deleteOneProject('f348ce57-130a-4848-91ba-10dd3e1df65b')

    expect(sut).toBeTruthy()

  })

})