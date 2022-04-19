const {Router} = require('express')
const {CreateUserController , ListOneUserController , ListAllUsersController} = require('./controllers/UserControllers')

const auth = require('./middlewares/auth')

const router = Router()

router.get('/:id' , auth ,  new ListOneUserController().handle)
router.get('/'  ,  new ListAllUsersController().handle)

router.post('/register'  , new CreateUserController().handle)




module.exports = router