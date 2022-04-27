const jwt = require('jsonwebtoken')

function auth(req , res , next){

  
  const authHeader = req.headers.authorization
  
  if(!authHeader){
    return res.status(400)
    .send({
      message: "No token provided"
    })
  }

  const parts = authHeader.split(' ')


  const [schema , token]  = parts

  
  if(!parts.length === 2 ){
    return res.status(401).send({error: 'Token error'});

  }
 
  if(!/^Bearer$/i.test(schema) ){
    return res.status(401).send({error: 'Token malformatted'})
  }

  jwt.verify(token , process.env.JWT , (err , decoded) => {
    if(err) return res.status(401).send({err: "token invalid"})
    
    req.userId = decoded.id

    return next()
  })
}
module.exports = auth