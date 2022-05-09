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
    testing crate
  */

  /*
    testing list All
  */

    
})