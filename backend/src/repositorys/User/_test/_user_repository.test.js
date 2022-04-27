const UserRepositoryAuth = require("../UserRepositoryAuth")

const user_fake={
  name:'gabriel',
  password:'465465'
}


describe('testing user repository auth ' , () => {
  it('should get user for name' , async ()=> {

    const [user] = await UserRepositoryAuth.getUserForName(user_fake.name)
    expect(user.name).toEqual(user_fake.name)
  })
  it('Should must validate a user by password and name' , async ()=> {

    const userAlredExist  = await  UserRepositoryAuth.validateUser(user_fake)
    expect(userAlredExist.name).toEqual(user_fake.name)
  })


})