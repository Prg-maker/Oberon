
import GlobalStyles from "./styles/GlobalStyles"

import { Routes } from "./routes"

import {UserContextProvider} from './context/UserProvider'
import 'sweetalert2/src/sweetalert2.scss'


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