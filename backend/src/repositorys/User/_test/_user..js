const User = require('../UserRepository')




const usuario_cadastrar = {
  name: 'DanielFernandesSilva',
  password: 'daniell123',
  nameGithub: 'Prg-Maker',
  projects:[]
}

const usuario_fake = {
  _id: '1',
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
    const [user] = await User.listOneUser('1')

    expect(user).toEqual(usuario_fake)

  })

  it('should delete a user for id' , async ()=> {
    const USER_NOT_LIST = await User.listOneUser('1')
    console.log(USER_NOT_LIST)

    const user = await User.deleteOne('1')
    expect(user).not.toEqual(USER_NOT_LIST)
  })
})