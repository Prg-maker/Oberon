export interface DataRequestLogin {
  name:string;
  password:string;
}

export interface DataResponseLogin{
  id:string;
  name: string;
  github?:string;
}


export interface RequestLogin{
  login:(data:DataRequestLogin) =>  Promise<DataResponseLogin| null>
}