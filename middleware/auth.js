const jwt = require('jsonwebtoken');
require('dotenv').config({path : 'variables.env'});

module.exports = (req, res, next) => {
    //console.log('soy el middleware');
     // console.log(req.get('Authorization'));
     const authHeader = req.get('Authorization');
     if(authHeader){
         // obtener el token
         const token = authHeader.split(' ')[1];
 
         try {
             //comprobar el jwt
             const usuario =jwt.verify(token, process.env.SECRETA);
 
              req.usuario = usuario;
             
         } catch (error) {
             console.log(error);
             console.log('JWT no valido');
             
         }
 
         
     }

    return next();
}