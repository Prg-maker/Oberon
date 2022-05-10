const ProjectUseCase = require("../ProjectUseCase")


const project_testing_fake_return_error={
  title:"title_fake_test",
  details:"details_fake_test",
}

const project_testing_fake_return_error_try_catch={
  userId: "015c5cbe-ba3f-4839-98a6-5e18551e1c7d",
  details:"details_fake_test",
}

const project_testing_create={
  userId: "015c5cbe-ba3f-4839-98a6-5e18551e1c7d",
  title:"title_fake_test",
  details:"details_fake_test",
}

describe('testing project use case' , ()=>{

  /*
    testing crate
  */

  it('should verify return error if userId does not exist' , async ()=> {

    return ProjectUseCase.create(project_testing_fake_return_error).catch(sut => {
      expect(sut).rejects.toThrow({
        message: "userId, not way passed"
      })
    })
  })

  it('should verify return error catch' , async ()=> {

    return ProjectUseCase.create(project_testing_fake_return_error_try_catch).catch(sut => {
      expect(sut).rejects.toThrow({
        message: "it was not possible create project"
      })
    })
  })


  it('should  create one project' , async ()=> {
   const sut = await ProjectUseCase.create(project_testing_create)

   expect(sut).toBeTruthy()

  })

  /*
    testing create
  */

  /*
    testing list All
  */

  it('Should  check if the userId has been passed' , async ()=> {
    const sut = await ProjectUseCase.listAllProject('')

    expect(sut).toEqual({
      message: "userId, not way passed"
    })
  })

  it('should check if the user does exist' , async () => {
    const sut = await ProjectUseCase.listAllProject('08924333-67f2-41bc-afde-ac58ae316e81')

    expect(sut).toEqual({
      message: "this user have none project"
    })

  })
  it('should list all projects for userId' , async () => {
    const userId = '015c5cbe-ba3f-4839-98a6-5e18551e1c7d'

    const sut = await ProjectUseCase.listAllProject(userId)


    expect(sut.data[0].userId).toEqual(userId)
  })

  /*
    testing list All
  */

 /*
    testing One Project
  */

  it('Should  check if the userId has been passed' , async ()=> {
    const sut = await ProjectUseCase.listOneProject('')

    expect(sut).toEqual({
      message: "userId, not way passed"
    })
  })

  it('should verify if the project exist' ,async  ()=> {
    const sut = await ProjectUseCase.listOneProject('1')
    expect(sut).toEqual({
      message: "project does not exist"
    })
  })


  it('should list one project' ,async  ()=> {
    const id_test = 'e3062563-8d5e-4231-b528-6b326c19b302'
    const sut = await ProjectUseCase.listOneProject(id_test)
   
    expect(sut.id).toEqual(id_test)

  })

 /*
    testing One Project
  */
 /*
    testing delete
  */
  it('Should  check if the userId has been passed' , async ()=> {
    const sut = await ProjectUseCase.delete('')

    expect(sut).toEqual({
      message: "userId, not way passed"
    })
  })

  it('should verify if the project exist' ,async  ()=> {
    const sut = await ProjectUseCase.delete('1')

    expect(sut).toEqual({
      message:"was not possible to delete  project"
    })
  })

  it('should delete one project for id' ,async  ()=> {
    const id = "21bf3a45-478e-44b3-b4a3-d7b02be20bee"
    const sut = await ProjectUseCase.delete(id)
    expect(sut).toBe(true)
  })


})