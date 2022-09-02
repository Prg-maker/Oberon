import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from '../pages/Home'

import {CreateUser} from '../pages/CreateUser'
import {Login} from '../pages/Login'
import {Projects} from '../pages/Projects'
import {CreateProject} from '../pages/CreateProject'



export function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreateUser/>}/>

          <Route path='/login/:id' element={<Login/>}/>
          <Route path='/user/projects/:id' element={<Projects/>}/>
          <Route path='/user/project' element={<CreateProject/>}/>
      </Routes>
    </BrowserRouter>
  )
}