import { UserData  , UserDataDelete , UserResponseList } from "./entities/User";

export interface UserRepository{
  create: (data:UserData) => Promise<void>,
  delete: (data:UserDataDelete) => Promise<void>,
  listAllUsers:()=> Promise<UserResponseList[] >
}