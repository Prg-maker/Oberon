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
    const user = await UserServices.listOneUser('91531197-2626-4dde-9cab-c9724ddbcc97')
    const response = await UserServices.delete('91531197-2626-4dde-9cab-c9724ddbcc97')

    expect(response).not.toEqual(user)
  })

})