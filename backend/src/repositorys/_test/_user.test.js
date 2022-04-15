const User = require('../UserRepository')




const usuario_cadastrar = {
  name: 'DanielFernandesSilva',
  password: 'daniell123',
  nameGithub: 'Prg-Maker'
}

describe('testing User' , ()=> {
  it('should creating a user' , async ()=>{

    const [user] = await User.createUser(usuario_cadastrar)

    const [expectUser] = await User.listOneUser(user._id)
    expect(user).toEqual(expectUser)

  })


  it('should list as users', async()=> {
    const users= await User.listAllUsers()

    expect(users).toBeTruthy()

  })

  it('should list a user for id' , async ()=> {
    const user = await User.listOneUser('2cdc83c4-2418-4ae0-b504-24448fdf837a')

    expect(user).toBeTruthy()

  })

  it('should delete a user for id' , async ()=> {
    const user = await User.deleteOne('70269f17-a187-4040-a679-61d2e7b5e16a')

    expect(user).toBeTruthy()
  })
})