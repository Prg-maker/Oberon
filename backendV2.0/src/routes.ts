import {CreateUserController} from './controllers/user/create-user-controller'

import {Router} from 'express'

const router = Router()

router.post('/', new CreateUserController().handle)

export {
  router
}