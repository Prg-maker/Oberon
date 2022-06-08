import React,{createContext , ReactNode , useState } from 'react'

type  User = {
  id: string;
  name: string;
  nameGithub: string;
}

type PropsUserContext = {
  state: User;
  setState: React.Dispatch<React.SetStateAction<User>>
}

interface Props{
  children: ReactNode
}

const default_value={
  state:{
    id:"",
    name:"",
    nameGithub: "",
  },
  setState: ()=> {}
}

export const UserContext = createContext<PropsUserContext>(default_value)

export function UserContextProvider({children}: Props){
  const [state , setState] = useState(default_value.state)
  
  return(
    <UserContext.Provider value={{
      state,
      setState
    }}>
      {children}
    </UserContext.Provider>
  )

}
