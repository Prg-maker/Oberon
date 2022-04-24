const UserRepositoryAuth = require("../UserRepositoryAuth")

const user_fake={
  name:'diego',
  passwor:'213'
}


describe('testing user repository auth ' , () => {
  it('should get user for name' , async ()=> {
    const name = 'diego'

    const user = await UserRepositoryAuth.getUserForName(user_fake.name)

    expect(user).toBeTruthy()
  })
})