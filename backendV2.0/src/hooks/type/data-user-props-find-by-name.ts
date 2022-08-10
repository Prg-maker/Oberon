export interface DataProps{
  name:string
}

export interface Error{
  messageError: Error 
}

export interface UseFindUserDataProps{
  findByName: (data:DataProps) => Promise<Error | null>
}


