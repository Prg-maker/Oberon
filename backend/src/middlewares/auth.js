const jwt = require('jsonwebtoken')

module.exports = (req , res , next) => {
  

  /*let authHeader = req.body.headers.Authorization || req.headers.authorization*/
  /*
    let authHeader = 

  */
  /*
   const authHeader = req.headers.authorization == undefined? req.body.headers.Authorization  : ''
  */

  let authHeader = req.headers.authorization

  if(authHeader == undefined){
    authHeader = req.body.headers.Authorization
    console.log(authHeader)
  }

  if(!authHeader){
    return res.status(401).send({error: "No token provided"});
  }

  const parts = authHeader.split(' ');


  if(!parts.length === 2 ){
    return res.status(401).send({error: 'Token error'});

  }

  const [schema, token] = parts;

  if(!/^Bearer$/i.test(schema) ){
    return res.status(401).send({error: 'Token malformatted'})
  }


  jwt.verify(token ,  process.env.JWT , (err , decoded)=> {
    if(err) return res.status(401).send({error: 'Token invalid'})
    
    req.userId = decoded.id
    return next()
  })


  
}