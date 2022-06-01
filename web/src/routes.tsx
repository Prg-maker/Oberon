import {
  BrowserRouter,
  Routes as RoutesProject,
  Route,
  
} from 'react-router-dom'


import { Login } from "./pages/Login"
import {  CreateUser} from "./pages/CreateUser"
import { Projects } from "./pages/Projects"

import { CreateProject } from "./pages/CreateProject"
import { DetailsProjectHome } from "./pages/DetailsProjectHome"
import { Home } from "./pages/Home"





import {} from 'react-router-dom'
import { useState } from 'react'
export function Routes(){ 
  return(
    <BrowserRouter>
      <RoutesProject>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<CreateUser/>}/>
        <Route  path='/login/:nameGithub' element={<Login/>}/>




        {/*router private*/}
        <Route path='/projects/:userId' element={<Projects/>}/>

      </RoutesProject>
    </BrowserRouter>
  )
}