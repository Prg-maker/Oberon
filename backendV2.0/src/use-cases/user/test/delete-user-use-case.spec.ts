import {CreateUserUseCase} from '../create-user-use-case'



const createUserSpy = jest.fn()
const deleteUserSpy = jest.fn()

const createUserUseCase = new CreateUserUseCase({
  create: createUserSpy,
  delete:deleteUserSpy
})



describe("testing delete user use case", () => {
  
});
