const UserServices = require('../UserServices')

const user = {
  "name": "DanielFernandesSilva",
  "password": "daniell123",
  "nameGithub": "Prg-Maker",
  "projects": []
}

const user_fake= {
  "_id":"1",
  "name": "DanielFernandesSilva",
  "password": "daniell123",
  "nameGithub": "Prg-Maker",
  "projects": []
}


describe('testing sevices user' , ()=> {
  

  it('creating user' , async ()=> {
    const response = await UserServices.create(user)
    
    const [EXPECT_USER] = await UserServices.listOneUser(response._id)

    expect(response).toEqual(EXPECT_USER)


  })

  it('list user' , async ()=> {
    const [response] = await UserServices.listOneUser(user_fake._id)
    
    expect(response).toEqual(user_fake)
  })


  it('list users' , async ()=> {
    const response = await UserServices.listAllUser()
    
    
    expect(response).toBeTruthy()
  })


  it('delete user' , async ()=> {
    const user = await UserServices.listOneUser('b6bdcdb3-e01c-437d-8a11-59681583fc0f')
    const response = await UserServices.delete('b6bdcdb3-e01c-437d-8a11-59681583fc0f')

    expect(response).not.toEqual(user)
  })

})