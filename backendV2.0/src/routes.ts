import {Router} from 'express'

import {CreateUserController} from './controllers/user/create-user-controller'
import { DeleteUserController } from './controllers/user/delete-user-controller'
import {ListAllUsersController} from './controllers/user/list-all-users-controller'
import { ListOneUserController } from './controllers/user/list-one-user-controller'


const router = Router()

router.post('/', new CreateUserController().handle)
router.get('/', new ListAllUsersController().handle)
router.get('/user', new ListOneUserController().handle)
router.delete('/user', new DeleteUserController().handle)

export {
  router
}