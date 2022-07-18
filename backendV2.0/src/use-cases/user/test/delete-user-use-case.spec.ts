import {DeleteUserUseCase} from '../delete-user-use-case'



const createUserSpy = jest.fn()
const deleteUserSpy = jest.fn()

const createUserUseCase = new DeleteUserUseCase({
  create: createUserSpy,
  delete:deleteUserSpy
})



describe("testing delete user use case", () => {
  it("should verify the id is provided" , async ()=> {
    await expect(createUserUseCase.execute({
      id: ''
    })).rejects.toThrow()
  })
});
