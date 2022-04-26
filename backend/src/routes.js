const {Router} = require('express')

const {
  CreateUserController,
  ListOneUserController, 
  ListAllUsersController
} = require('./controllers/UserControllers')

const AuthLoginController = require('./controllers/UserControllers/UserAuth/AuthLoginController')

const auth = require('./middlewares/auth')

const router = Router()

router.get('/:id' , auth ,  new ListOneUserController().handle)
router.get('/'  ,  new ListAllUsersController().handle)

router.post('/register'  , new CreateUserController().handle)
router.post('/login' , new AuthLoginController().handle)




module.exports = router