const UserServices = require('../UserServices')

const user = {
  "_id": "b4e5abbf-2a2a-4f28-a9f4-f0f58a85f116",
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
    const response = await UserServices.listOneUser('b4e5abbf-2a2a-4f28-a9f4-f0f58a85f116')
    
    expect(response)
  })


  it('list users' , async ()=> {
    const response = await UserServices.listAllUser()
    
    
    expect(response).toBeTruthy()
  })


  it('delete user' , async ()=> {
    const response = await UserServices.delete('ddad3456-24c8-4316-8f50-d6a689b51a81')

    expect(response).toBeTruthy()
  })

})