import {CreateUserUseCase} from '../create-user-use-case'


const createUserSpy = jest.fn()

const createUserUseCase = new CreateUserUseCase({
  create: createUserSpy
})

describe("testing create user use case", () => {
  it("should verify if the name and password are provided, else return one error personalized", async () => {
    
  });
});
