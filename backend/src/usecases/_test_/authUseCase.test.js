const AuthUseCase = require('../AuthUseCase')
const user_fake={
  name:'gabriel',
  password:'daniell123'
}


describe('testing use case auth' , ()=> {
  it('Should must validate a user by password and name' , async ()=> {
    const user = await AuthUseCase.auth(user_fake)
    console.log(user , 'aqui')

    
    expect(user.name).toEqual(user_fake.name)
    
  })
})