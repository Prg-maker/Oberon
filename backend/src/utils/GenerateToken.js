const jwt = require('jsonwebtoken')

function generateToken(parms = {}){
  return jwt.sign(parms , process.env.JWT ,{
    expiresIn: '1d'
  })
}

module.exports = generateToken