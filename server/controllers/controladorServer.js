let url = "http://127.0.0.1:3000/"
const querystring = require('querystring')
const fetch    = require('node-fetch')
let path       = require('path')


exports.iniciar_sesion = function(req, res) {

  let username  = req.body.nombre_de_usuario
  let email     = req.body.email 
  let rawUrl    = `${url}usuario?nombre_de_usuario=${username}&email=${email}`
  let user      = {}

  fetch(rawUrl)
  .then(response => res.json())
  .then(response => {
    //do something  
    //res.render('chat', { name: "Ariel"});
    return  { name: "Ariel", verdad:"se envia"};
  })
  .catch(error => {
    console.error(error)

  })
};