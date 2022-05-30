import {
  BrowserRouter,
  Routes as RoutesProject,
  Route 
} from 'react-router-dom'


import { Login } from "./pages/Login"
import {  CreateUser} from "./pages/CreateUser"
import { Projects } from "./pages/Projects"

import { CreateProject } from "./pages/CreateProject"
import { DetailsProjectHome } from "./pages/DetailsProjectHome"
import { Home } from "./pages/Home"

export function Routes(){
  return(
    <BrowserRouter>
      <RoutesProject>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<CreateUser/>}/>
      </RoutesProject>
    </BrowserRouter>
  )
}