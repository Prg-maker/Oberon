export interface DataProps{
  name:string
}

export interface Error{
  messageError: Error 
}

export interface UseFindUserDataProps{
  findByName: (data:DataProps) => Promise<Error | null>
}


export interface Id{
  id:string
}

export interface UseFinUserById{
  findById: (data:Id)=> Promise<Error | null>
}