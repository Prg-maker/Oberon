const UserRepositoryAuth = require("../UserRepositoryAuth")

const user_fake={
  name:'daniell123',
  passwor:'213'
}


describe('testing user repository auth ' , () => {
  it('should get user for name' , async ()=> {
    const name = 'daniell123'

    const user = await UserRepositoryAuth.getUserForName(user_fake.name)

    expect(user).toBeTruthy()
  })
})