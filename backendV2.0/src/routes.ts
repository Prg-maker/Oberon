import {Router} from 'express'

import {CreateUserController} from './controllers/user/create-user-controller'
import { DeleteUserController } from './controllers/user/delete-user-controller'
import {ListAllUsersController} from './controllers/user/list-all-users-controller'
import { ListOneUserController } from './controllers/user/list-one-user-controller'

import {LoginUserController} from './controllers/user/login-user-controller'

import { AuthLogin } from './middlewares/auth-login'


const router = Router()

const authLogin = new AuthLogin()


router.post('/', new CreateUserController().handle)
router.get('/', new ListAllUsersController().handle)
router.get('/user', authLogin.auth , new ListOneUserController().handle)
router.post('/login', new LoginUserController().handle)
router.delete('/user', new DeleteUserController().handle)




export {
  router
}