import { UserData } from "./entities/User";

export interface UserRepository{
  create: (data:UserData) => Promise<void>
}