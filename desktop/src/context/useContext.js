import {useContext , createContext, useState} from 'react'



const default_value = {
  state:{
    id:'',
    name:'',
    github:''
  },
  setState: ()=> {}
}


export const UserContext = createContext(default_value)

export function UserAuthContextProvider({children}){

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