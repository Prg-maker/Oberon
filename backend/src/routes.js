const {Router} = require('express')

const {
  CreateUserController,
  ListOneUserController, 
  ListAllUsersController,
  AuthLoginController,
  DeleteUserController
} = require('./controllers/UserControllers')


const {
  GetAllProjectsController,
  CreateProjectsController,
  GetOneProjectController,
  DeleteOneProjectController
} = require('./controllers/ProjectsControllers')




const auth = require('./middlewares/auth')

const router = Router()

/*projects*/


router.get('/project/:id' , auth ,  new GetOneProjectController().handle)
router.get('/projects' , auth ,  new GetAllProjectsController().handle)
router.post('/project' , auth ,  new CreateProjectsController().handle)
router.delete('/project' , auth ,  new DeleteOneProjectController().handle)



/*user*/

router.get('/:id' , auth ,  new ListOneUserController().handle)
router.get('/'  ,  new ListAllUsersController().handle)

router.post('/register'  , new CreateUserController().handle)
router.post('/login' , new AuthLoginController().handle)
router.delete('/delete' , new DeleteUserController().handle)





module.exports = router