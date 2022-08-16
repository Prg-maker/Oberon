import {ListOneUserUseCase} from '../list-one-user-use-case'



const createUserSpy = jest.fn()
const deleteUserSpy = jest.fn()
const listAllUsersSpy = jest.fn()
const ListOneUserSpy = jest.fn()

const listOneUserUseCase = new ListOneUserUseCase({
  create: createUserSpy,
  delete:deleteUserSpy,
  listAllUsers: listAllUsersSpy,
  requestOneUser:ListOneUserSpy
})

describe('testing list one user use case' , ()=>{
  it('should verify if the id is provided' , async () => {
    await expect(listOneUserUseCase.execute({
      id:''
    })).rejects.toThrow()
  })

  it('should return success' ,async  ()=> {
    await expect(listOneUserUseCase.execute({
      id:'2cfc7218-0530-45d2-bbec-2eecd8b45f3d'
    })).resolves.not.toThrow()
  })
})