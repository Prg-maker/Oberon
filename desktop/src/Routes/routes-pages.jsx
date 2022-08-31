import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from '../pages/Home'

import {CreateUser} from '../pages/CreateUser'
import {Login} from '../pages/Login'

export function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreateUser/>}/>
        <Route path='/login/:id' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}