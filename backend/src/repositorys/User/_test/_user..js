const User = require('../UserRepository')




const usuario_cadastrar = {
  name: 'usuario_fake_test',
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




  it('should list as users', async()=> {

    const users = await User.listAllUsers()
    expect(users)

  })

  it('should show one message if the user does not exist ' , async ()=> {
    const user = await User.listOneUser('1')


    expect(user).toEqual({
      message: "user does not exist"
    })
    

  })
  
  
  it('should list a user for id' , async ()=> {
    
    const id = '86bb594a-a6fe-4a47-81db-3a907990ac1d'

    const user = await User.listOneUser(id)

    expect(user.id).toEqual(id)

  })

   
  it('should delete a user for id' , async ()=> {
    const users = await User.listAllUsers()

    const user = await User.listOneUser(users[0].id)


    const sut = await User.deleteOne(users[0].id)

    expect(sut).toEqual(user)


  })
  



})