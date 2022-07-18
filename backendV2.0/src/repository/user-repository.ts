import { UserData  , UserDataDelete} from "./entities/User";

export interface UserRepository{
  create: (data:UserData) => Promise<void>,
  delete: (data:UserDataDelete) => Promise<void>
}