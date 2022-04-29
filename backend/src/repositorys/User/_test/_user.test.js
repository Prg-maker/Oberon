const User = require('../UserRepository')




const usuario_cadastrar = {
  name: 'gabriel',
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
    const [user] = await User.listOneUser('942d8a09-d962-40a9-b234-36885e75e39f"')

    expect(user).toEqual(usuario_fake)

  })

  it('should delete a user for id' , async ()=> {
    const USER_NOT_LIST = await User.listOneUser('1')

    const user = await User.deleteOne('f572edb6-3450-4133-bad8-4847246fb782')
    expect(user).not.toEqual(USER_NOT_LIST)
  })

  it('should validate of name, if the name did not exist, create a user, else not create' , async  ()=> {
    const user = usuario_fake

    const userValidate = await User.validateOfName('daniel')
  
    expect(userValidate)

  })
})