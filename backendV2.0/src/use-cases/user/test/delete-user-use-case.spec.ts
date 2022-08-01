import {DeleteUserUseCase} from '../delete-user-use-case'



const createUserSpy = jest.fn()
const deleteUserSpy = jest.fn()
const listAllUsersSpy = jest.fn()
const ListOneUserSpy = jest.fn()

const deleteUserUseCase = new DeleteUserUseCase({
  create: createUserSpy,
  delete:deleteUserSpy,
  listAllUsers: listAllUsersSpy,
  requestOneUser:ListOneUserSpy
})



describe("testing delete user use case", () => {

  it("should verify the id is provided" , async ()=> {
    await expect(deleteUserUseCase.execute({
      id: ''
    })).rejects.toThrow()
  })

    
  it("should verify the id is provided" , async ()=> {
    await expect(deleteUserUseCase.execute({
      id: '456456'
    })).resolves.not.toThrow()
  })




});
