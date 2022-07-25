export interface UserData{
  name: string;
  password: string;
  github?: string;
}

export interface UserDataId{
  id:string
}


export interface UserResponseList{
 
  id:string;
  name: string;
  password: string;
  github?: string;
}




export interface ResponseOneUserData{
  name:string;
  github?:string;

}