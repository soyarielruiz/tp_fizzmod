let url           = "http://localhost:3000/"
const querystring = require('querystring')
const fetch       = require('node-fetch')
let path          = require('path')

exports.iniciar_sesion = function(req, res) {

  let username  = req.body.nombre_de_usuario
  let email     = req.body.email 
  let rawUrl    = `${url}usuario?nombre_de_usuario=${username}&email=${email}`
  let user      = {}

  /*function conectedUser( response ) {
    console.log(response)
    console.log("pasa por conected")
    res.redirect('/inicio_chat')
  }

  async function getUserData( url ) {
    try {
      var 
    }
      .then(response => {
    console.log(response)
    callback(response)
  })
  }*/
  async function getData(rawUrl) {
    return await fetch(rawUrl).then(response => {
      return res.json()
    })
    .catch(error => {
      console.error(error)
    })
  }

  getData(rawUrl).then( function( response ) {
    console.log(response)
    user = response
  })
  return user;
}

exports.guardarUsuario = function( req, res, callback ) {
  let rawUrl    = `${url}usuario`
  let data      = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      nombre_de_usuario: req.body.nombre_de_usuario,
      email: req.body.email,
      id_status: 1
  }

  fetch(rawUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => /*callback(*/response)
  .catch(error => {
    console.error(error)
  })
}