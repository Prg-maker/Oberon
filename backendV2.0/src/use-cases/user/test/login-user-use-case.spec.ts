import {LoginUserUseCase} from '../login-user-use-case'

const loginSpy = jest.fn()

const loginUserUseCase = new LoginUserUseCase({
  login:loginSpy
})

describe('testing login user use case'  , ()=> {
  it('should verify if name and password is provided' , async ()=> {
    await expect(loginUserUseCase.execute({
      name:'',
      password:''
    })).rejects.toThrow()
  })

 


  test('should verify if the user exist', async () => { 

    await expect(loginUserUseCase.execute({
      name:'DANIEL',
      password:'12345678'
    })).resolves.not.toThrow()

  })

})