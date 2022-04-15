const User = require('../UserRepository')




const usuario_cadastrar = {
  name: 'DanielFernandesSilva',
  password: 'daniell123',
  nameGithub: 'Prg-Maker',
  projects:[]
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
    const user = await User.listOneUser('3c740ec1-7c96-40f6-80df-e8d81d3669a1')

    expect(user).toBeTruthy()

  })

  it('should delete a user for id' , async ()=> {
    const user = await User.deleteOne('af1422cb-a128-4aa2-a1f7-c07155b7a178')

    expect(user).toBeTruthy()
  })
})