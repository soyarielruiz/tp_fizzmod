'use strict'

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
  .then(res => res.json())
  .then(res => {
  //do something  
    res.render('chat.html', { data: JSON.stringify(res) });
  })
  .catch(error => {
    console.error(error)
  })

  
  //res.sendFile(path.join(__dirname + '/../views/chat.html'));
  //res.send('NOT IMPLEMENTED: Inicio sesion')
};