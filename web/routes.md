router.get('/:id' , auth ,  new ListOneUserController().handle)
router.get('/'  ,  new ListAllUsersController().handle)

router.post('/register'  , new CreateUserController().handle)
router.post('/login' , new AuthLoginController().handle)
router.delete('/delete' , new DeleteUserController().handle)
