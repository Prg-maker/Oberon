const User = require('../UserRepository')




const usuario_cadastrar = {
  name: 'daniel213',
  password: 'daniell123',
  nameGithub: 'Prg-Maker',
  projects:[]
}

const usuario_fake = {
  name: 'DanielFernandesSilva',
  password: 'daniell123',
  nameGithub: 'Prg-Maker',
  projects:[]
}

describe('testing User' , ()=> {

  it('should creating a user' , async ()=>{

    const user = await User.createUser(usuario_cadastrar)
    expect(user.name).toEqual(usuario_cadastrar.name)

  })

  it('should validate of name, if the name did not exist, create a user, else not create' , async  ()=> {

    const userValidate = await User.createUser(usuario_cadastrar)

    
    expect(userValidate).toEqual({message: "could not create user"})

  })


  it('Should   see if there are users, there are no users, it returns a message saying that the user is not' , async ()=> {
    const user = await User.listAllUsers()

    expect(user).toEqual({
      message: "There are no users"
    })

  })

  it('should list as users', async()=> {
    
    const user = await User.listAllUsers()
    console.log(user)
    expect(user)

  })


  /*
  it('should list a user for id' , async ()=> {
    const [user] = await User.listOneUser('942d8a09-d962-40a9-b234-36885e75e39f"')

    expect(user).toEqual(usuario_fake)

  })

  it('should delete a user for id' , async ()=> {
    const USER_NOT_LIST = await User.listOneUser('1')

    const user = await User.deleteOne('f572edb6-3450-4133-bad8-4847246fb782')
    expect(user).not.toEqual(USER_NOT_LIST)
  })*/


})