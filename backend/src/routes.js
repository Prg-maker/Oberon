const {Router} = require('express')

const {
  CreateUserController,
  ListOneUserController, 
  ListAllUsersController,
  AuthLoginController,
  DeleteUserController
} = require('./controllers/UserControllers')


const {
  GetAllProjectsController
} = require('./controllers/ProjectsControllers')




const auth = require('./middlewares/auth')

const router = Router()

/*projects*/


router.get('/projects' , auth ,  new GetAllProjectsController().handle)

/*user*/

router.get('/:id' , auth ,  new ListOneUserController().handle)
router.get('/'  ,  new ListAllUsersController().handle)

router.post('/register'  , new CreateUserController().handle)
router.post('/login' , new AuthLoginController().handle)
router.delete('/delete' , new DeleteUserController().handle)





module.exports = router