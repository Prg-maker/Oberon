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


