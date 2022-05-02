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


  it('Should return one message if the user does not exist' , async ()=> {
    const sut = await UserUseCase.listOneUser('ed214da-becc-487f-883d-47f5d3bea867')


    expect(sut).toEqual({
      message: "user does not exist"
    })
      

  })


  it('Should  list one user by id' , async ()=> {
    const sut = await UserUseCase.listOneUser('0ed214da-becc-487f-883d-47f5d3bea867')
    const user = {
      "id": "0ed214da-becc-487f-883d-47f5d3bea867",
      "name": "DanielFernandesSilva",
      "password": "$2b$10$JuQBMaX4Q3USCSReCqV2fuLnVCA4qgSth./w1iEJZ2tnk5Ix8Ig9y",
    }


    expect(sut.id).toEqual(user.id)
    expect(sut.name).toEqual(user.name)
    expect(sut.password).toEqual(user.password)

  })


  it('should list all the users' , async ()=> {

    const sut = await UserUseCase.listAllUser()

    expect(sut).toBeTruthy()

  })

  it('Should delete one user' , async ()=> {
    const sut = await UserUseCase.delete('ece5fafc-d510-46f3-b588-bb51980fdd0c')

    expect(sut).toBeTruthy()
  })

})