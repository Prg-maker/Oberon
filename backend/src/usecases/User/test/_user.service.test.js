const UserUseCase = require('../UserUseCase')

const test_user = Math.random()

const user = {
  "name": `${test_user.toString()}`,
  "password": "daniell123",
  "nameGithub": "Prg-Maker",
  "projects": []
}

const user_fake= {
  "name": "DanielFernandesSilva",
  "password": "daniell123",
  "nameGithub": "Prg-Maker",
  "projects": []
}


describe('testing UserUseCase , create , listAll , list and delete' , ()=> {
  

  it('Should  create user' , async ()=> {
    const sut = await UserUseCase.create(user)

    expect(sut.name).toEqual(user.name)
  })


  it('Should verify that the user has not been created' , async ()=> {
    const sut = await UserUseCase.create(user_fake)

    expect(sut).toEqual({
      message: "could not create user"
    })
  })

  it('list user' , async ()=> {

  })


  it('list users' , async ()=> {

  })


  it('delete user' , async ()=> {

  })

})