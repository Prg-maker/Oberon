const {Router} = require('express')

const {
  CreateUserController,
  ListOneUserController, 
  ListAllUsersController,
  AuthLoginController,
  DeleteUserController
} = require('./controllers/UserControllers')


const auth = require('./middlewares/auth')

const router = Router()

router.get('/:id' , auth ,  new ListOneUserController().handle)
router.get('/'  ,  new ListAllUsersController().handle)

router.post('/register'  , new CreateUserController().handle)
router.post('/login' , new AuthLoginController().handle)
router.delete('/delete' , new DeleteUserController().handle)




module.exports = router