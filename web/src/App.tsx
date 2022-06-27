
import GlobalStyles from "./styles/GlobalStyles"

import { Routes } from "./routes"

import {UserContextProvider} from './context/UserProvider'


function App() {

  return (

    <>
      <UserContextProvider>
        <Routes/>
      </UserContextProvider>
      <GlobalStyles/>
    </>
  )
}

export default App