const User = require('../UserRepository')

const usuario_cadastrar = {
  name: 'Daniel',
  password: 'daniell123',
  nameGithub: 'Prg-Maker'
}


describe('testing User' , ()=> {
  it('should creating a user' , async ()=>{

    const user = await User.createUser(usuario_cadastrar)

    expect(user).toBeTruthy()


  })
})