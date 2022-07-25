import { UserData  , UserDataId , UserResponseList, ResponseOneUserData} from "./entities/User";

export interface UserRepository{
  create: (data:UserData) => Promise<void>,
  delete: (data:UserDataId) => Promise<void>,
  listAllUsers:()=> Promise<UserResponseList[] >
  requestOneUser: (data:UserDataId)=> Promise<ResponseOneUserData[]>
}