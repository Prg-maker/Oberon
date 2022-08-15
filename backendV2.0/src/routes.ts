import {CreateUserController} from './controllers/user/create-user-controller'
import {ListAllUsersController} from './controllers/user/list-all-users-controller'

import {Router} from 'express'

const router = Router()

router.post('/', new CreateUserController().handle)
router.get('/', new ListAllUsersController().handle)

export {
  router
}