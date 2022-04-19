const {Router} = require('express')
const {CreateUserController , ListOneUserController} = require('./controllers/UserControllers')

const auth = require('./middlewares/auth')

const router = Router()

router.get('/:id' , auth ,  new ListOneUserController().handle)

router.post('/register'  , new CreateUserController().handle)
router.post('/register'  , (req , res)=> {
})




module.exports = router