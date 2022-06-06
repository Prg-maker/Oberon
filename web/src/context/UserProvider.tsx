import React,{createContext , ReactNode , useState } from 'react'

type  User = {
  id: string;
  name: string;
  nameGithub: string;
  token: string;
}

interface Props{
  children: ReactNode
}

const default_value={
  state:{
    id:"",
    name:"",
    nameGithub: "",
    token:""
  },
  setState: ()=> {}
}

export const UserContext = createContext<User>(default_value.state)

export function UserContextProvider({children}: Props){
  const [state , setState] = useState<User>(default_value.state)

  return(
    <UserContext.Provider value={state}>
      {children}
    </UserContext.Provider>
  )

}
