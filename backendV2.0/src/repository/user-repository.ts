import { UserData  , UserDataDelete , UserResponseList, RequestOneUserData, ResponseOneUserData} from "./entities/User";

export interface UserRepository{
  create: (data:UserData) => Promise<void>,
  delete: (data:UserDataDelete) => Promise<void>,
  listAllUsers:()=> Promise<UserResponseList[] >
  requestOneUser: (data:RequestOneUserData)=> Promise<ResponseOneUserData>
}