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


  it('Should   see if there are users, there are no users, it returns a message saying that the user is not' , async ()=> {
    const user = await User.listAllUsers()

    expect(user).toEqual({
      message: "There are no users"
    })

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
  
    const user = await User.listOneUser('a50da4d3-bc74-429b-beb1-d742edda9c4e')

    expect(user).toEqual(
      {
        "id": "a50da4d3-bc74-429b-beb1-d742edda9c4e",
        "name": "daniel213",
        "password":"$2b$10$Fq2zj3U7OxWbFXcmD1HZ7.2wwzTAY9nyHd95pGzzdP0gXwFYE/kTq",
        "nameGithub":"Prg-Maker"
      }
    )

  })

   
  it('should delete a user for id' , async ()=> {

    const id_fake = '5d050d6a-73f5-4770-ad1e-22743ac5e364'
    const user = await User.listOneUser(id_fake)


    const sut = await User.deleteOne(id_fake)

    expect(sut).toEqual(user)


  })
  



})