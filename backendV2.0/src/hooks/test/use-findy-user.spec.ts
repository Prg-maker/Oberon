import {UseFindUserByName} from '../useFindUserByName'

const useFindUserByName = new UseFindUserByName()


describe('testing useFindUserByName', () => { 
  it('should verify if the name is provide, else return error' , async  ()=> {
   await  expect(useFindUserByName.findByName({
      name:""
    })).rejects.toThrow()
  })

  it('should verify if the user exist' ,async ()=> {
    await expect(useFindUserByName.findByName({
      name:"daniel"
    })).resolves.not.toThrow()
  })

  it('should return one error if name exist',   async ()=> {

    await expect( useFindUserByName.findByName({
      name:'jade'
    })).rejects.toThrow()


  })

})