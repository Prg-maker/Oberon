export interface UserData{
  name: string;
  password: string;
  github?: string;
}

export interface UserDataDelete{
  id:string
}


export interface UserResponseList{
 
  id:string;
  name: string;
  password: string;
  github?: string;
}


export interface RequestOneUserData{
  name:string;
  password:string;
}


export interface ResponseOneUserData{
  name:string;
  github?:string;

}