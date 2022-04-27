const AuthUseCase = require('../AuthUseCase')
const user_fake={
  name:'danield',
  password:'465465'
}


describe('testing use case auth' , ()=> {
  it('Should must validate a user by password and name' , async ()=> {
    const [user] = await AuthUseCase.auth(user_fake)

    
    expect(user.name).toEqual(user_fake.name)
    
  })
})