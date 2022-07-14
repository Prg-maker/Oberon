import {CreateUserUseCase} from '../create-user-use-case'


const createUserSpy = jest.fn()

const createUserUseCase = new CreateUserUseCase({
  create: createUserSpy
})

describe("testing create user use case", () => {
  it("should verify if the name  are provided, else return one error personalized", async () => {

    await expect(createUserUseCase.execute({
      name:'',
      password:'fake_password'
    })).rejects.toThrow()
  });
  

  it("should verify if the password  are provided, else return one error personalized", async () => {

    await expect(createUserUseCase.execute({
      name:'fake_name',
      password:''
    })).rejects.toThrow()
  });
});
